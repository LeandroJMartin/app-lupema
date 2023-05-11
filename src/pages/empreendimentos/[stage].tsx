import { GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BlockEmp from '../../components/layout/BlockEmp';
import FilterApp from '../../components/layout/Filter';
import { Page, RootQueryToEmpreendimentoConnection } from '../../generated';
import ClientApp from '../../lib/genql';
import { useRouter } from 'next/router';

interface Props {
  data: {
    page: Page;
    emp: RootQueryToEmpreendimentoConnection;
  };
}

const EmpreendimentosApp: NextPage<Props> = ({ data }) => {
  const { query } = useRouter();
  const [valueFromChild, setValueFromChild] = useState(query.stage);

  useEffect(() => {
    setValueFromChild(query.stage);
  }, [query.stage]);

  const handleValueFromChildChange = (slug: any) => {
    setValueFromChild(slug);
  };

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
        <h2 className="text-2xl font-bold uppercase text-center">
          Encontre o imóvel ideal
        </h2>
        <FilterApp
          data={data.emp}
          resultDataState={handleValueFromChildChange}
        />
      </section>

      <section className=" bg-bgi py-[40px] md:py-[80px] border-b border-green/50">
        <div className="container">
          <h1 className="title mb-4 !font-bold">{data.page.title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.emp.nodes.map((item) => {
              if (valueFromChild === item.empreendimento?.estagioDaObra?.slug) {
                return <BlockEmp content={item} main={true} />;
              }
              if (valueFromChild === 'todos') {
                return <BlockEmp content={item} main={true} />;
              }
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
  const { page, empreendimentos, pageBy } = await ClientApp.query({
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
          enderecoBairro: true,
          tipoDoEmpreendimento: true,
        },
        slug: true,
      },
    },
  });

  return {
    props: {
      data: {
        page: page,
        emp: empreendimentos,
        social: pageBy?.informacoesDeContato,
      },
    },
    revalidate: 30,
  };
};
