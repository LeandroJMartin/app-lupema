import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import BlogItems from '../components/layout/BlogItens';
import ButtonLoadMore from '../components/layout/ButtonLoadMore';
import RightBar from '../components/layout/RightBar';
import SearchApp from '../components/layout/Search';
import {
  Post,
  RootQueryToEmpreendimentoConnection,
  RootQueryToPostConnection,
} from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  data: {
    posts: RootQueryToPostConnection;
    emp: RootQueryToEmpreendimentoConnection;
  };
}

let POSTS_PER_PAGE = 4;

const NoticiasApp: NextPage<Props> = ({ data }) => {
  const [postsToShow, setPostsToShow] = useState<any | []>([]);
  const [after, setAfter] = useState('');
  const [btLoadMore, setBtLoadMore] = useState(false);

  useEffect(() => {
    getPosts(POSTS_PER_PAGE, after);
  }, []);

  async function getPosts(first: number, after: string) {
    const posts = await ClientApp.query({
      posts: [
        {
          first: first,
          after: after,
        },
        {
          nodes: {
            title: true,
            slug: true,
            featuredImage: {
              node: {
                sourceUrl: true,
              },
            },
            excerpt: true,
          },
          pageInfo: {
            hasNextPage: true,
            endCursor: true,
          },
        },
      ],
    });

    if (posts?.posts?.nodes && Array.isArray(posts.posts.nodes)) {
      setPostsToShow([...postsToShow, ...posts.posts?.nodes]);
      setAfter(posts.posts?.pageInfo.endCursor || '');
    }

    if (posts.posts?.pageInfo.hasNextPage) {
      setBtLoadMore(true);
    } else {
      setBtLoadMore(false);
    }
  }

  return (
    <section className="bg-black border-b-2 border-green/20">
      <div className="container mt-[100px] sm:mt-[74px] py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          <div className="col-span-1 lg:col-span-3 order-2 lg:order-1">
            {postsToShow?.map((post: Post) => {
              return <BlogItems post={post} />;
            })}
            {btLoadMore && (
              <div className="w-full mt-8">
                <button
                  onClick={() => getPosts(POSTS_PER_PAGE, after)}
                  className="text-center bg-green text-black py-2 px-8 mx-auto block uppercase font-semibold"
                  aria-label="Botão carregar mais"
                >
                  Carregar mais
                </button>
              </div>
            )}
          </div>
          <div className="order-1 lg:order-2">
            <SearchApp />
            <div className="hidden lg:block mt-6">
              {data.emp?.nodes.map((item) => {
                return <RightBar emp={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticiasApp;

export const getStaticProps = async () => {
  const { empreendimentos, pageBy } = await ClientApp.query({
    empreendimentos: [
      {
        first: 4,
      },
      {
        nodes: {
          empreendimento: {
            imagemPrincipal: {
              sourceUrl: true,
            },
            nomeDoEmpreendimento: true,
            estagioDaObra: {
              name: true,
              slug: true,
            },
            empCidade: true,
            empMetragem: true,
            empDormitorios: true,
            empVagasDeGaragem: true,
          },
          slug: true,
        },
      },
    ],
    pageBy: [
      {
        pageId: 201,
      },
      {
        informacoesDeContato: {
          coTelefone: true,
          coWhatsapp: true,
          coEmail: true,
          coEndereco: true,
          linkFacebook: true,
          linkInstagram: true,
          linkYoutube: true,
        },
      },
    ],
  });

  return {
    props: {
      data: {
        emp: empreendimentos,
        social: pageBy?.informacoesDeContato,
      },
      revalidate: 30,
    },
  };
};
