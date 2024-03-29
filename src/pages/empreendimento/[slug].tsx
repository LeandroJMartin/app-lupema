import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import {
  Empreendimento_Empreendimento,
  Empreendimento_Empreendimento_videosOutos,
  Empreendimento_Housiverso,
  MediaItem,
} from '../../generated';
import ClientApp from '../../lib/genql';
import FormEmpreendimento from '../../components/layout/forms/FormEmpreendimento';
import SlideApp from '../../components/layout/Slide';
import { TbArrowRightBar, TbCar } from 'react-icons/tb';
import { BiBed } from 'react-icons/bi';
import Maps from '../../components/layout/Maps';
import FormDownloadApresentation from '../../components/layout/forms/FormDownApresentation';
import { useState } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import VideoApp from '../../components/layout/Video';
import { BsPlusLg } from 'react-icons/bs';

interface Props {
  data: {
    emp: Empreendimento_Empreendimento;
    housi: Empreendimento_Housiverso;
  };
}

interface IImagensData {
  sourceUrl: string;
}

interface IVideosData {
  linkDoVideo: string;
}

interface PropsGallery {
  videosOutos:
    | (Empreendimento_Empreendimento_videosOutos | undefined)[]
    | undefined;
  imagensOutros: (MediaItem | undefined)[] | undefined;
}

const EmpreendimentoApp: NextPage<Props> = ({ data }) => {
  const [value, setValue] = useState(false);
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  });

  let combinedArray = [];

  const plantas = data.emp?.itemsPlantas?.map((imgs) => {
    return (
      <div className="mt-6">
        <p className="ml-3 text-black text-lg font-semibold text-center mb-4">
          {imgs?.plantasDescricao}
        </p>
        <a href={imgs?.imagensDasPlantas?.sourceUrl} data-fancybox="mapas">
          <div className="relative h-[300px] xl:h-[550px] w-full">
            <Image
              src={imgs?.imagensDasPlantas?.sourceUrl || ''}
              alt="Galeria de imagens"
              fill
              className="object-contain"
            />
          </div>
        </a>
      </div>
    );
  });

  const gallery = data.emp?.galeriaDeFotos?.map((imgs) => {
    return (
      <a
        key={imgs?.id}
        href={imgs?.sourceUrl}
        data-fancybox="gallery"
        className="group relative h-[110px] sm:h-[160px] lg:h-[200px] 2xl:lg:h-[240px] w-full"
      >
        <Image
          src={imgs?.sourceUrl || ''}
          alt="Galeria de imagens"
          fill
          className="object-cover"
        />
        <span className="bg-black/75 absolute top-0 left-0 right-0 z-10 w-full h-full flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
          <BsPlusLg
            size={30}
            className="text-green rotate-0 group-hover:rotate-90 transition"
          />
        </span>
      </a>
    );
  });

  const CombineArrayGallery = ({
    videosOutos,
    imagensOutros,
  }: PropsGallery) => {
    const videos = videosOutos;
    const imagens = imagensOutros;

    function shuffleArray(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    if (imagens && Array.isArray(imagens) && videos && Array.isArray(videos)) {
      const combinedArray = [...imagens, ...videos];
      const newArrayGallery = shuffleArray(combinedArray);
      return newArrayGallery;
    }
  };

  const galleryProgress = CombineArrayGallery({
    videosOutos: data?.emp?.videosOutos ?? [],
    imagensOutros: data?.emp?.imagensOutros ?? [],
  })?.map((item, index) => {
    if (item.linkDoVideo) {
      return (
        <div key={index} className="relative w-full aspect-square">
          <VideoApp embedLink={item?.linkDoVideo} />
        </div>
      );
    } else {
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
    }
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

  function isNumeric(str: string | undefined) {
    if (str === undefined) return;
    return /\d+/.test(str) ? true : false;
  }

  const address = data.emp?.enderecoRua;
  const number = data.emp?.enderecoNumero;
  const district = data.emp?.enderecoBairro;
  const city = data.emp?.empCidade;

  const arrAll = [address, number, district, city];

  const fullAddress = arrAll.reduce((initial, current, index) => {
    if (index === 0) return !!current ? current : initial;

    return !!current
      ? !!initial
        ? `${initial}, ${current}`
        : current
      : initial;
  }, '');

  function handleValue(newValue: boolean) {
    setValue(newValue);
  }

  return (
    <>
      <div className="bg-black mt-[100px] sm:mt-[74px]">
        <section className="py-14">
          <div className="container flex flex-col sm:flex-row gap-8">
            <div className="w-full sm:w-[60%] flex flex-col justify-between">
              <div className="max-w-[200px] h-[150px] relative">
                <span className="bg-green py-2 max-w-max text-white text-center font-bold px-8">
                  {data.emp?.estagioDaObra?.name}
                </span>
                {data.emp?.logotipoDoEmpreendimento?.sourceUrl && (
                  <Image
                    src={data.emp?.logotipoDoEmpreendimento?.sourceUrl || ''}
                    alt={`Logotipo do ${data.emp?.nomeDoEmpreendimento}`}
                    fill
                    className="object-contain mt-4"
                  />
                )}
              </div>
              <div>
                <p className="text-green block">
                  Tipo:
                  <span className="ml-1 mr-2">
                    {data.emp?.tipoDoEmpreendimento}
                  </span>
                  |<span className="ml-2">{data.emp?.empCidade}</span>
                </p>
                <p
                  className="text-white py-4"
                  dangerouslySetInnerHTML={{
                    __html: data.emp?.empDescricao || '',
                  }}
                />
              </div>
              <ul className="my-4">
                <li className="text-green text-xl leading-[2rem] sm:leading-[3rem] font-semibold flex items-center">
                  <TbArrowRightBar size={20} />
                  <span className="ml-2">{data.emp?.empMetragem}</span>
                </li>
                <li className="text-green text-xl leading-[2rem] sm:leading-[3rem] font-semibold flex items-center">
                  <BiBed size={22} />
                  <span className="mx-2">{data.emp?.empDormitorios}</span>
                  dormitórios
                </li>
                <li className="text-green text-xl leading-[2rem] sm:leading-[3rem] font-semibold flex items-center">
                  <TbCar size={22} />
                  <span className="mx-2">{data.emp?.empVagasDeGaragem}</span>
                  vagas
                </li>
              </ul>

              <div className="inline-block mt-4">
                <button
                  onClick={() => setValue(true)}
                  className="mb-4 mr-4 inline-block border border-green py-2 w-[150px] text-green text-center cursor-pointer hover:bg-zinc-300 hover:text-black transition"
                >
                  Baixar apresentação
                </button>
                <a
                  href="#form"
                  className="mb-4 xl:mr-4 inline-block border border-green bg-green py-2 w-[150px] text-black text-center cursor-pointer hover:bg-zinc-300 hover:text-black transition font-bold"
                >
                  Faça uma simulação
                </a>
                {data.emp?.linkDoTourVirtual && (
                  <a
                    href={data.emp?.linkDoTourVirtual}
                    className="mb-4 mr-4 inline-block border border-green py-2 w-[150px] text-green text-center cursor-pointer hover:bg-zinc-300 hover:text-black transition"
                  >
                    Tour virtual
                  </a>
                )}
                <button className="mb-4 inline-block border border-green bg-green py-2 w-[150px] text-black text-center cursor-pointer hover:bg-zinc-300 hover:text-black transition font-bold">
                  Andamento da obra
                </button>
              </div>
            </div>
            <div className="aspect-auto justify-end flex w-full sm:w-[40%] order-1 sm:order-2">
              <Image
                src={data.emp.imagemPrincipal?.sourceUrl || ''}
                width={480}
                height={670}
                alt="Imagem principal"
              />
            </div>
          </div>
        </section>
        <section className="container">
          <div className="my-6 gallery grid gap-4 grid-cols-2 sm:grid-cols-4">
            {gallery}
          </div>
        </section>

        {data.housi.diferencial && (
          <section className="container py-8 sm:py-12">
            <h2 className="text-2xl lg:text-4xl text-green text-center">
              Diferenciais Housi
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm: mt-10">
              {data.housi.diferencial?.map((item) => {
                return (
                  <div className="flex items-center">
                    {item?.iconeHousi?.sourceUrl && (
                      <img
                        src={item?.iconeHousi?.sourceUrl}
                        alt="Icone do diferencial"
                        className="w-7 sm:w-8 h-7 sm:h-8"
                      />
                    )}
                    <p className="text-white text-[1.1rem] ml-3">
                      {item?.nomeHousi}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}
        <section className="container py-8 sm:py-12">
          <h2 className="text-2xl lg:text-4xl text-green text-center">
            Diferenciais
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm: mt-10">
            {data.emp?.diferenciaisItems?.map((item) => {
              return (
                <div className="flex items-center">
                  {item?.iconeimagemDoDiferencial?.sourceUrl && (
                    <img
                      src={item?.iconeimagemDoDiferencial?.sourceUrl}
                      alt="Icone do diferencial"
                      className="w-7 sm:w-8 h-7 sm:h-8"
                    />
                  )}
                  <p className="text-white ml-3 text-[1.1rem]">
                    {item?.nomeDiferencial}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        {plantas && data.emp?.itensAreacomuns != undefined && (
          <section className="bg-white py-8 sm:py-12 plantas">
            <div className="container">
              {plantas && (
                <>
                  <h2 className="text-2xl lg:text-4xl text-green text-center">
                    Plantas
                  </h2>
                  <div className="w-[75%] block mx-auto">
                    <SlideApp
                      items={plantas}
                      navigation={false}
                      responsive={responsiveGallery}
                      dots={false}
                      infinite={false}
                    />
                  </div>
                </>
              )}
              {data.emp?.itensAreacomuns?.length > 0 &&
                data.emp?.itensAreacomuns != undefined && (
                  <div className="mt-8">
                    <h2 className="text-2xl lg:text-4xl text-green text-center">
                      Áreas comuns
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm: mt-10">
                      {data.emp?.itensAreacomuns?.map((item) => {
                        return (
                          <div className="flex items-center">
                            {item?.iconeimagemAreacomuns?.sourceUrl && (
                              <img
                                src={item?.iconeimagemAreacomuns?.sourceUrl}
                                alt="Icone do diferencial"
                                className="w-7 sm:w-8 h-7 sm:h-8"
                              />
                            )}
                            <p className="ml-3 text-black text-[1.1rem]">
                              {item?.descricaoAreacomuns}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>
          </section>
        )}

        <section className="container">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center w-full pt-16 space-y-12">
              <div className="text-center space-y-2">
                <h2 className="text-2xl lg:text-4xl text-green">Localização</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center w-full">
                <div className="w-full lg:w-3/12 space-y-8 mb-8 sm:mb-0">
                  {data.emp?.enderecoRua && (
                    <div className="space-y-2">
                      <h3 className="text-2xl lg:text-4xl text-green">
                        Empreendimento
                      </h3>
                      <p className="text-base text-white">{fullAddress}</p>
                    </div>
                  )}

                  {data.emp?.endStandVendas && (
                    <div className="space-y-2">
                      <h3 className="text-2xl lg:text-4xl text-green">
                        Stands de vendas
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: data.emp?.endStandVendas || '',
                        }}
                        className="text-base text-white"
                      />
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-9/12 h-[250px] sm:h-[420px] lg:pl-8 2xl:pl-12">
                  <Maps address={fullAddress || ''} />
                </div>
              </div>
            </div>
          </div>

          {data.emp?.pontosDeReferencia != undefined &&
            data.emp?.pontosDeReferencia?.length > 0 && (
              <div className="container grid grid-cols-2 sm:grid-cols-4 gap-6 sm: mt-10 pb-12">
                {data.emp?.pontosDeReferencia?.map((item) => {
                  return (
                    <div className="flex items-center">
                      <img
                        src={item?.iconeOuImagemRef?.sourceUrl}
                        alt="Icone do diferencial"
                        className="w-7 sm:w-8 h-7 sm:h-8"
                      />
                      <p className="ml-3 text-white text-[1.1rem]">
                        {item?.nomePontoReferencia}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
        </section>
        {data.emp?.imagensOutros != undefined &&
          data.emp?.imagensOutros?.length > 0 && (
            <section className="container">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center w-full pt-16 space-y-12">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl lg:text-4xl text-green">
                      Conheça mais sobre o {data.emp?.nomeDoEmpreendimento}
                    </h2>
                  </div>

                  <div className="block w-full">
                    <SlideApp
                      items={galleryProgress}
                      responsive={responsiveGalleryProgress}
                      gap={30}
                      infinite={false}
                      dots={false}
                      navigation={false}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
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
        {(data.emp?.listaItensTec || data.emp?.listaItensTec2) && (
          <section className="bg-green pb-8">
            <div className="container">
              <h2 className="text-2xl lg:text-4xl text-white text-center py-10">
                Ficha Técnica
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-6 text-lg w-[85%] mx-auto">
                <div className="p-2">
                  <h3 className="mb-6 block font-bold border-b border-b-white/10 pb-2 uppercase text-xl">
                    Dados técnicos
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.emp?.listaItensTec || '',
                    }}
                  />
                </div>

                <div className="p-2">
                  <h3 className="mb-6 block font-bold border-b border-b-white/10 pb-2 uppercase text-xl">
                    Profissionais
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.emp?.listaItensTec2 || '',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        {value && <FormDownloadApresentation onValue={handleValue} />}
      </div>
    </>
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

  const { empreendimento, page } = await ClientApp.query({
    empreendimento: [
      {
        id: `${slug}`,
        idType: 'SLUG',
      },
      {
        empreendimento: {
          imagemPrincipal: {
            sourceUrl: true,
          },
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
          enderecoRua: true,
          enderecoNumero: true,
          enderecoBairro: true,
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
        housiVerso: {
          diferencial: {
            iconeHousi: {
              sourceUrl: true,
            },
            nomeHousi: true,
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
  });

  return {
    props: {
      data: {
        emp: empreendimento?.empreendimento,
        housi: empreendimento?.housiVerso,
        social: page?.informacoesDeContato,
      },
    },
    revalidate: 30,
  };
};
