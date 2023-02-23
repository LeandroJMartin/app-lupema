import { GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import BlockEmp from '../../components/layout/BlockEmp';
import FilterApp from '../../components/layout/Filter';
import { Page, RootQueryToEmpreendimentoConnection } from '../../generated';
import ClientApp from '../../lib/genql';

interface Props {
  data: {
    page: Page;
    emp: RootQueryToEmpreendimentoConnection;
  };
}

const EmpreendimentosApp: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div className="relative h-[200px] sm:h-[350px] md:h-[500px] border-b-4 border-b-green">
        <Image
          src={data.page.featuredImage?.node.sourceUrl || ''}
          alt="Imagem Empreendimentos Lupema"
          fill
          className="object-cover"
        />
        <div className="bg-black/20 absolute top-0 left-0 right-0 z-10 w-full h-full"></div>
      </div>
      <section className="container py-[40px]">
        <h2 className="text-lg uppercase text-center">
          Encontre o imóvel ideal
        </h2>
        <FilterApp />
      </section>
      <section className=" bg-bgi py-[40px] md:py-[80px] border-b border-green/50">
        <div className="container">
          <h1 className="title mb-4">{data.page.title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.emp.nodes.map((item) => {
              return <BlockEmp content={item.empreendimento} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default EmpreendimentosApp;

export const getStaticPaths: GetStaticPaths = async () => {
  const { empreendimentos } = await ClientApp.query({
    empreendimentos: {
      nodes: {
        empreendimento: {
          estagioDaObra: {
            name: true,
            slug: true,
          },
        },
      },
    },
  });

  const paths =
    empreendimentos?.nodes.map((path) => {
      return {
        params: {
          stage: path.empreendimento?.estagioDaObra?.slug,
        },
      };
    }) || [];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async () => {
  const { page, empreendimentos } = await ClientApp.query({
    page: [
      {
        id: '79',
        idType: 'DATABASE_ID',
      },
      {
        title: true,
        featuredImage: {
          node: {
            sourceUrl: true,
          },
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
          empValorAPartirDe: true,
        },
      },
    },
  });

  return {
    props: {
      data: {
        page: page,
        emp: empreendimentos,
      },
    },
    revalidate: 30,
  };
};
