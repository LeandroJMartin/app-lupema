import Link from 'next/link';
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
              slug: true,
              empreendimento: {
                imagemPrincipal: {
                  mediaItemUrl: true,
                },
              },
            },
            on_Post: {
              __typename: true,
              title: true,
              slug: true,
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
          {result ? (
            <>
              <h1 className="py-4 px-6 bg-gray-200 border border-gray-300">
                Resultado da pesquisa:{' '}
                <span className="text-green">{s && s}</span>
              </h1>
              <div className="">
                {result.map((item) => {
                  return (
                    <>
                      <Link
                        className="border-b border-b-gray-400 block max-w-max hover:text-green my-6"
                        href={
                          item.__typename === 'Post'
                            ? `noticia/${item.slug}`
                            : `produto/${item.slug}`
                        }
                      >
                        <h3>{item.title}</h3>
                      </Link>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <h1>Nenhum resultado encontrado para sua pesquisa.</h1>
          )}
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
