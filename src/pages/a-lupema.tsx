import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TimeLine from '../components/layout/TimeLine';
import VideoApp from '../components/layout/Video';
import { Page_Conteusobre, Page_Informacoesdecontato } from '../generated';
import ClientApp from '../lib/genql';

export interface PropsAbout {
  data: {
    page: Page_Conteusobre;
    social: Page_Informacoesdecontato;
  };
}

const Alupema: NextPage<PropsAbout> = ({ data }) => {
  return (
    <>
      <section className="container mt-[100px] sm:mt-[74px] py-[40px] md:py-[80px]">
        <h1 className="title !font-bold">A Lupema</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
          <div>
            <div className="relative h-[420px]">
              <Image
                src={data.page?.imagem1?.sourceUrl || ''}
                className="object-cover"
                fill
                alt="Imagem sobre Lupema"
              />
            </div>
            <span className="h-[25px] w-[75%] block ml-[20%] sm:ml-[25%] border-b border-l border-r sm:border-r-0 border-green"></span>
            <p
              dangerouslySetInnerHTML={{
                __html: data.page?.descricao || '',
              }}
              className="pt-6 md:pr-6 text-[1.1rem]"
            />
          </div>
          <div className="relative z-0">
            <div className="flex justify-center my-4">
              <h1 className="px-4 py-4 text-green text-5xl font-light w-[100%] sm:w-[80%]">
                {data.page?.titulo}
              </h1>
            </div>
            <span className="h-[25px] w-[75%] xl:w-[50%] ml-[15px] sm:ml-[0] block border-t border-r border-l sm:border-l-0 border-green"></span>
            <div className="relative h-[350px]">
              <Image
                src={data.page?.imagem2?.sourceUrl || ''}
                className="object-cover"
                fill
                alt="Imagem sobre Lupema"
              />
            </div>
            <div className="mt-8 grid grid-cols-5 gap-4 sm:gap-6">
              {data.page?.imagensSelos?.map((img) => {
                return <img src={img?.sourceUrl || ''} alt="Selos Lupema" />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        {data.page?.tituloVideo && data.page?.descricaoVideo && (
          <div className="bg-bgVideoAbout bg-no-repeat bg-cover pb-[80px]">
            <div className="container py-[40px] md:py-[80px]">
              <h1 className="text-green font-light text-[2.5rem] md:text-[4.5rem] text-center">
                {data.page?.tituloVideo}
              </h1>
              <div className="w-full sm:w-[75%] mx-auto mt-6">
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.page?.descricaoVideo || '',
                  }}
                  className="mb-8 text-white"
                />
              </div>
            </div>
          </div>
        )}
        {data.page?.linkDoVideo && (
          <VideoApp embedLink={data.page?.linkDoVideo} />
        )}
      </section>

      <section className="py-[40px] md:py-[80px]">
        <h1 className="title !font-bold">Linha do tempo</h1>
        <TimeLine prop={data.page} />
      </section>

      <section className="relative">
        <div className="px-8 sm:container flex flex-col sm:flex-row gap-6 p-10 items-center">
          <div className="col-span-2 text-white h-auto sm:h-[150px] w-full sm:w-[60%] bg-green sm:bg-transparent">
            <h1 className="text-[2.4rem] block mb-4 font-medium">
              {data.page?.tituloLstore}
            </h1>
            <p className="block">{data.page?.descricaoLstore}</p>
            <Link
              href="https://api.whatsapp.com/send?phone=5517996766861"
              className="text-white border border-white py-2 px-6 mt-4 hidden sm:inline-block"
              target="_blank"
            >
              Agende uma visita
            </Link>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full sm:w-[40%]">
            <Image
              src={data.page?.imagembannerDoTourVirtual?.sourceUrl || ''}
              alt="Image LStore Lupema"
              fill
              className="object-contain"
            />
          </div>
          <Link
            href="https://api.whatsapp.com/send?phone=5517996766861"
            className="text-green border border-green py-2 px-6 block sm:hidden"
            target="_blank"
          >
            Agende uma visita
          </Link>
        </div>
        <div className="absolute top-0 sm:top-[calc(50%-175px)] left-0 h-[450px] sm:h-[350px] w-full bg-green z-[-1]"></div>
      </section>
    </>
  );
};

export default Alupema;

export const getStaticProps = async () => {
  const { page, pageBy } = await ClientApp.query({
    page: [
      {
        id: '2',
        idType: 'DATABASE_ID',
      },
      {
        conteuSobre: {
          descricao: true,
          titulo: true,
          tituloVideo: true,
          linkDoVideo: true,
          descricaoVideo: true,
          linkDoTourVirtual: true,
          imagembannerDoTourVirtual: {
            sourceUrl: true,
          },
          imagem1: {
            sourceUrl: true,
          },
          imagem2: {
            sourceUrl: true,
          },
          tituloLstore: true,
          descricaoLstore: true,
          imagensSelos: {
            sourceUrl: true,
          },
          item: {
            nomeDoEmpreendimento: true,
            data: true,
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
  });

  return {
    props: {
      data: {
        page: page?.conteuSobre,
        social: pageBy?.informacoesDeContato,
      },
    },
    revalidate: 30,
  };
};
