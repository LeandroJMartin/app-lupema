import { NextPage } from 'next';
import Image from 'next/image';
import VideoApp from '../components/layout/Video';
import ClientApp from '../lib/genql';
import ImgVideo from '../../public/video.jpeg';
import TimeLine from '../components/layout/TimeLine';
import { Page_Conteusobre, Page_Informacoesdecontato } from '../generated';
import Link from 'next/link';

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
        <h1 className="title">A Lupema</h1>
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
              className="pt-6 md:pr-6"
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
              <h1 className="text-green font-bold text-[2.5rem] md:text-[4.5rem] text-center">
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

      <section className="pt-[40px] md:pt-[80px]">
        <h1 className="title">Linha do tempo</h1>
        <TimeLine prop={data.page} />
      </section>

      <section className="container pt-[40px] md:pt-[80px]">
        <h1 className="title">{data.page?.tituloLstore}</h1>
        <p>{data.page?.descricaoLstore}</p>
        <div className="relative h-[200px] sm:h-[350px] md:h-[520px] mt-6">
          <Image
            src={data.page?.imagembannerDoTourVirtual?.sourceUrl || ''}
            alt="Image LStore Lupema"
            fill
            className="object-cover"
          />
        </div>
        <Link href="/agende-uma-visita" className="button mx-auto my-6">
          Agende uma visita
        </Link>
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
