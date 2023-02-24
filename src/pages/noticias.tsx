import { NextPage } from 'next';
import BlogItems from '../components/layout/BlogItens';
import ButtonLoadMore from '../components/layout/ButtonLoadMore';
import RightBar from '../components/layout/RightBar';
import SearchApp from '../components/layout/Search';
import {
  RootQueryToEmpreendimentoConnection,
  RootQueryToPostConnection,
} from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  data: {
    post: RootQueryToPostConnection;
    emp: RootQueryToEmpreendimentoConnection;
  };
}

const NoticiasApp: NextPage<Props> = ({ data }) => {
  return (
    <section className="bg-black border-b-2 border-green/20">
      <div className="container mt-[100px] sm:mt-[74px] py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div className="col-span-1 md:col-span-3 order-2 md:order-1">
            {data.post?.nodes.map((post) => {
              return (
                <div className="py-6 md:py-8 px-6 md:px-8 border border-green text-white">
                  <BlogItems post={post} />
                </div>
              );
            })}
            <div className="w-full mt-8">
              <ButtonLoadMore />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <SearchApp />
            <div className="hidden md:block mt-6">
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
  const { posts, empreendimentos } = await ClientApp.query({
    posts: {
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
    },
    empreendimentos: {
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
          empValorAPartirDe: true,
        },
        slug: true,
      },
    },
  });

  return {
    props: {
      data: {
        post: posts,
        emp: empreendimentos,
      },
      revalidate: 30,
    },
  };
};
