import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ClientApp from '../lib/genql';

const Pesquisa = () => {
  const {
    query: { s },
  } = useRouter();

  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const makeQuery = async () => {
    setLoading(true);

    const result = await ClientApp.query({
      contentNodes: [
        {
          where: {
            search: s as string,
          },
        },
        {
          nodes: {
            on_Empreendimento: {
              __typename: true,
              title: true,
              uri: true,
              empreendimento: {
                imagemPrincipal: {
                  mediaItemUrl: true,
                },
              },
            },
            on_Post: {
              __typename: true,
              title: true,
            },
          },
        },
      ],
    });

    if (
      result?.contentNodes?.nodes &&
      result?.contentNodes?.nodes?.length > 0
    ) {
      setResult(result.contentNodes.nodes);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (s) {
      makeQuery();
    }
  }, [s]);

  return (
    <section className="container py-[40px] md:py-[80px] mt-[100px] sm:mt-[74px]">
      {loading ? (
        <div>Buscando...</div>
      ) : (
        <>
          <h1>Resultado da pesquisa: {s && s}</h1>

          <div>
            <pre>{result && JSON.stringify(result, null, 2)}</pre>
          </div>
        </>
      )}
    </section>
  );
};

export default Pesquisa;

export const getStaticProps = async () => {
  const { pageBy } = await ClientApp.query({
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
        social: pageBy?.informacoesDeContato,
      },
    },
    revalidate: 60 * 60,
  };
};
