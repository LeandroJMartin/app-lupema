import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Empreendimento_Empreendimento } from '../../generated';
import ClientApp from '../../lib/genql';
import FormEmpreendimento from '../../components/layout/forms/FormEmpreendimento';
import SlideApp from '../../components/layout/Slide';

interface Props {
  data: Empreendimento_Empreendimento;
}

const EmpreendimentoApp: NextPage<Props> = ({ data }) => {
  const plantas = data.itemsPlantas?.map((imgs) => {
    return (
      <div className="mt-6">
        <p className="ml-3 text-black text-lg font-semibold text-center mb-4">
          {imgs?.plantasDescricao}
        </p>
        <div className="relative h-[300px] xl:h-[550px] w-full">
          <Image
            src={imgs?.imagensDasPlantas?.sourceUrl || ''}
            alt="Galeria de imagens"
            fill
            className="object-contain"
          />
        </div>
      </div>
    );
  });

  const gallery = data.galeriaDeFotos?.map((imgs) => {
    return (
      <div className="relative h-[300px] xl:h-[550px] w-full">
        <Image
          src={imgs?.sourceUrl || ''}
          alt="Galeria de imagens"
          fill
          className="object-cover cursor-gallery"
        />
      </div>
    );
  });

  const galleryProgress = data?.imagensOutros?.map((item, index) => {
    return (
      <div key={index} className="relative w-full aspect-square">
        <Image
          src={item?.sourceUrl || ''}
          fill
          className="object-cover p-4"
          alt="imagens e videos da obra"
        />
      </div>
    );
  });

  const responsiveGallery = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const responsiveGalleryProgress = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4, itemsFit: 'contain' },
  };

  return (
    <div className="bg-black mt-[100px] sm:mt-[74px]">
      <section>
        <div className="container">
          <div className="max-w-[250px] h-[150px] relative">
            <Image
              src={data.logotipoDoEmpreendimento?.sourceUrl || ''}
              alt={`Logotipo do ${data.nomeDoEmpreendimento}`}
              fill
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-6">
            <div className="col-span-4 order-1">
              <div className="flex flex-col sm:flex-row justify-items-start sm:justify-between">
                <div className="flex items-center">
                  <h1 className="text-2xl text-green">
                    {data.nomeDoEmpreendimento}
                  </h1>
                  <span className="px-2 text-xl text-white">|</span>
                  <span className="text-white">{data.estagioDaObra?.name}</span>
                </div>
                <p className="text-green">
                  Tipo:{' '}
                  <span className="mr-2">{data.tipoDoEmpreendimento}</span>|
                  <span className="ml-2">{data.empCidade}</span>
                </p>
              </div>
              <p
                className="text-white py-4"
                dangerouslySetInnerHTML={{
                  __html: data.empDescricao || '',
                }}
              />
              <div className="text-green">
                <p className="flex justify-between">
                  <span>Andamento da obra</span>
                  <span>{data.andamentoDaObra}%</span>
                </p>
                <div className="w-full block bg-gray-600 h-2 relative mt-1">
                  <span
                    className="bg-green h-2 absolute top-0 left-0 z-10 block"
                    style={{ width: `${data.andamentoDaObra}%` }}
                  ></span>
                </div>
              </div>
            </div>
            <div className="order-3 sm:order-2">
              <a
                href={data.arquivoDaApresentacao?.sourceUrl}
                download
                className="border border-green py-2 w-[150px] block text-green text-center cursor-pointer"
              >
                Baixar apresentação
              </a>
              <a
                href="#form"
                className="bg-green py-2 w-[150px] block text-black text-center my-4 cursor-pointer"
              >
                Faça uma simulação
              </a>
              <a
                href={data.linkDoTourVirtual}
                className="border border-green py-2 w-[150px] block text-green text-center cursor-pointer"
              >
                Tour virtual
              </a>
            </div>
            <ul className="order-2 sm:order-3">
              <li className="text-green text-xl leading-[2rem] sm:leading-[3rem] font-semibold">
                {data.empMetragem}
              </li>
              <li className="text-green text-xl leading-[2rem] sm:leading-[3rem] font-semibold">
                {data.empDormitorios}
              </li>
              <li className="text-green text-xl leading-[2rem] sm:leading-[3rem] font-semibold">
                {data.empVagasDeGaragem}
              </li>
              <li className="text-green text-xl leading-[2rem] sm:leading-[3rem] font-semibold">
                A partir de {data.empValorAPartirDe}
              </li>
            </ul>
          </div>
        </div>
        <div className="my-6 gallery">
          <SlideApp
            items={gallery}
            infinite={true}
            gap={30}
            largura={{ desktop: 180, mobile: 20 }}
            navigation={true}
            responsive={responsiveGallery}
          />
        </div>
      </section>
      <section className="container py-8 sm:py-12">
        <h2 className="text-2xl lg:text-4xl text-green text-center">
          Diferenciais
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm: mt-10">
          {data.diferenciaisItems?.map((item) => {
            return (
              <div className="flex items-center">
                <img
                  src={item?.iconeimagemDoDiferencial?.sourceUrl}
                  alt="Icone do diferencial"
                  className="w-7 h-7"
                />
                <p className="text-white ml-3">{item?.nomeDiferencial}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-white py-8 sm:py-12 plantas">
        <div className="container">
          <h2 className="text-2xl lg:text-4xl text-green text-center">
            Plantas
          </h2>
          <div className="w-[75%] block mx-auto">
            <SlideApp
              items={plantas}
              navigation={true}
              responsive={responsiveGallery}
              infinite={false}
            />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl lg:text-4xl text-green text-center">
              Áreas comuns
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm: mt-10">
              {data.itensAreacomuns?.map((item) => {
                return (
                  <div className="flex items-center">
                    <img
                      src={item?.iconeimagemAreacomuns?.sourceUrl}
                      alt="Icone do diferencial"
                      className="w-7 h-7"
                    />
                    <p className="ml-3 text-black">
                      {item?.descricaoAreacomuns}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center w-full pt-16 space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl lg:text-4xl text-green">Localização</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full">
              <div className="w-full lg:w-3/12 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl lg:text-4xl text-green">
                    Empreendimento
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.enderecoDoEmpreendimento || '',
                    }}
                    className="text-base text-white"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl lg:text-4xl text-green">
                    Stands de vendas
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.endStandVendas || '',
                    }}
                    className="text-base text-white"
                  />
                </div>
              </div>
              <div className="w-full lg:w-9/12 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.900942186043!2d-49.37638008445357!3d-20.835706172491314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb2b7c2767b8f%3A0x818ad40282191728!2sR.%20Pedro%20D%C3%B3ria%20Sobrinho%2C%20360%20-%20Ouro%20Verde%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015084-280!5e0!3m2!1spt-BR!2sbr!4v1677102792807!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-2 sm:grid-cols-4 gap-6 sm: mt-10 pb-12">
          {data.pontosDeReferencia?.map((item) => {
            return (
              <div className="flex items-center">
                <img
                  src={item?.iconeOuImagemRef?.sourceUrl}
                  alt="Icone do diferencial"
                  className="w-7 h-7"
                />
                <p className="ml-3 text-white">{item?.nomePontoReferencia}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center w-full pt-16 space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl lg:text-4xl text-green">
                Conheça mais sobre o {data.nomeDoEmpreendimento}
              </h2>
            </div>

            <div className="block w-full">
              <SlideApp
                items={galleryProgress}
                responsive={responsiveGalleryProgress}
                gap={30}
                infinite={true}
                navigation={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="form" className="bg-black">
        <div className="container flex items-center justify-center">
          <div className="flex flex-col items-center w-full xl:w-[60%] py-16 space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl lg:text-4xl text-green">
                Quer saber mais ?
              </h2>
              <h3 className="text-2xl lg:text-3xl text-white">
                Preencha o formulário abaixo
              </h3>
            </div>

            <div className="block w-full">
              <FormEmpreendimento />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-green">
        <div className="container flex items-center justify-center">
          <div className="flex flex-col items-center w-full xl:w-[60%] py-16 space-y-12">
            <h2 className="text-2xl lg:text-4xl text-white">Ficha Técnica</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-white gap-4 [&>div>p]:text-lg">
              <div className="p-2">
                <p
                  dangerouslySetInnerHTML={{ __html: data.listaItensTec || '' }}
                />
              </div>

              <div className="p-2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.listaItensTec2 || '',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpreendimentoApp;

export const getStaticPaths: GetStaticPaths = async () => {
  const routs = await ClientApp.query({
    empreendimentos: {
      nodes: {
        slug: true,
      },
    },
  });

  const paths =
    routs?.empreendimentos?.nodes.map((path) => {
      return {
        params: {
          slug: path.slug as string,
        },
      };
    }) || [];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const { empreendimento } = await ClientApp.query({
    empreendimento: [
      {
        id: `${slug}`,
        idType: 'SLUG',
      },
      {
        empreendimento: {
          logotipoDoEmpreendimento: {
            sourceUrl: true,
          },
          nomeDoEmpreendimento: true,
          estagioDaObra: {
            name: true,
            slug: true,
          },
          tipoDoEmpreendimento: true,
          empCidade: true,
          empDescricao: true,
          andamentoDaObra: true,
          arquivoDaApresentacao: {
            sourceUrl: true,
          },
          empDormitorios: true,
          empMetragem: true,
          empVagasDeGaragem: true,
          empValorAPartirDe: true,
          linkDoTourVirtual: true,
          galeriaDeFotos: {
            sourceUrl: true,
          },
          diferenciaisItems: {
            iconeimagemDoDiferencial: {
              sourceUrl: true,
            },
            nomeDiferencial: true,
          },
          itemsPlantas: {
            plantasDescricao: true,
            imagensDasPlantas: {
              sourceUrl: true,
            },
          },
          itensAreacomuns: {
            descricaoAreacomuns: true,
            iconeimagemAreacomuns: {
              sourceUrl: true,
            },
          },
          enderecoDoEmpreendimento: true,
          endStandVendas: true,
          pontosDeReferencia: {
            iconeOuImagemRef: {
              sourceUrl: true,
            },
            nomePontoReferencia: true,
          },
          imagensOutros: {
            sourceUrl: true,
          },
          videosOutos: {
            linkDoVideo: true,
          },
          listaItensTec: true,
          listaItensTec2: true,
        },
      },
    ],
  });

  return {
    props: { data: empreendimento?.empreendimento },
    revalidate: 30,
  };
};
