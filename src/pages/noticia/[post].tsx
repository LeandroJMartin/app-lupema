import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import RightBar from '../../components/layout/RightBar';
import SearchApp from '../../components/layout/Search';
import {
  Page_Informacoesdecontato,
  Post,
  RootQueryToEmpreendimentoConnection,
} from '../../generated';
import ClientApp from '../../lib/genql';

interface Props {
  data: {
    post: Post;
    emp: RootQueryToEmpreendimentoConnection;
    social: Page_Informacoesdecontato;
  };
}

const NoticiasApp: NextPage<Props> = ({ data }) => {
  return (
    <section className="bg-black pt-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-[100px] sm:mt-[74px]">
        <div className="border border-green col-span-1 md:col-span-3 order-2 md:order-1 py-6 md:py-8 px-6 md:px-8">
          <div className="relative h-[250px] sm:h-[350px] xl:h-[500px]">
            <Image
              src={data.post.featuredImage?.node.sourceUrl || ''}
              fill
              alt="Imagem principal da notícia"
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl text-green my-4">{data.post.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: data.post?.content || '',
            }}
            className="text-white post"
          />
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
    </section>
  );
};

export default NoticiasApp;

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await ClientApp.query({
    posts: {
      nodes: {
        slug: true,
      },
    },
  });

  const paths =
    posts?.nodes.map((path) => {
      return {
        params: {
          post: path.slug as string,
        },
      };
    }) || [];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.post as string;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const { post, empreendimentos, page } = await ClientApp.query({
    post: [
      {
        id: `${slug}`,
        idType: 'SLUG',
      },
      {
        title: true,
        content: true,
        featuredImage: {
          node: {
            sourceUrl: true,
          },
        },
      },
    ],
    page: [
      {
        id: '201',
        idType: 'DATABASE_ID',
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
        },
        slug: true,
      },
    },
  });

  return {
    props: {
      data: {
        post: post,
        emp: empreendimentos,
        social: page?.informacoesDeContato,
      },
      revalidate: 30,
    },
  };
};
