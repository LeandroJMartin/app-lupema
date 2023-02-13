import { InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import VideoApp from '../components/layout/Video';
import ClientApp from '../lib/genql';
import ImgVideo from '../../public/video.jpeg';
import TimeLine from '../components/layout/TimeLine';
import { Page_Conteusobre } from '../generated';

export interface PropsAbout {
  data: Page_Conteusobre;
}

const Home: NextPage<PropsAbout> = ({ data }) => {
  return (
    <>
      <section className="container mt-[100px] sm:mt-[74px] py-[40px] md:py-[80px]">
        <h1 className="title">A Lupema</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 mt-8">
          <div>
            <div className="relative h-[420px]">
              <Image
                src={data?.imagem1?.sourceUrl || ''}
                className="object-cover"
                fill
                alt="Imagem sobre Lupema"
              />
            </div>
            <span className="h-[25px] w-[75%] block ml-[25%] border-b border-l border-green"></span>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.descricao || '',
              }}
              className="pt-6 md:pr-6"
            />
          </div>
          <div className="relative z-0">
            <div className="flex justify-center my-4">
              <h1 className="px-4 py-4 text-green text-5xl font-light w-[100%] sm:w-[80%]">
                {data?.titulo}
              </h1>
            </div>
            <span className="h-[25px] w-[75%] xl:w-[50%] block border-t border-r border-green"></span>
            <div className="relative h-[350px]">
              <Image
                src={data?.imagem2?.sourceUrl || ''}
                className="object-cover"
                fill
                alt="Imagem sobre Lupema"
              />
            </div>
            <div className="mt-8 grid grid-cols-5 gap-6">
              {data?.imagensSelos?.map((img) => {
                return <img src={img?.sourceUrl || ''} alt="Selos Lupema" />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-bgVideoAbout bg-no-repeat bg-cover pb-[80px]">
          <div className="container py-[40px] md:py-[80px]">
            <h1 className="text-green font-bold text-[4.5rem] text-center">
              {data?.tituloVideo}
            </h1>
            <div className="w-[75%] mx-auto mt-6">
              <p
                dangerouslySetInnerHTML={{
                  __html: data?.descricaoVideo || '',
                }}
                className="mb-8 text-white"
              />
            </div>
          </div>
        </div>
        {data?.linkDoVideo ? (
          <VideoApp embedLink={data?.linkDoVideo} />
        ) : (
          <div className="w-[800px] h-[485px] relative mx-auto mt-[-140px]">
            <Image src={ImgVideo} fill className="object-cover" alt="Video" />
          </div>
        )}
      </section>

      <section className="py-[40px] md:py-[80px]">
        <h1 className="title">Linha do tempo</h1>
        <TimeLine prop={data} />
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { page } = await ClientApp.query({
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
  });

  return {
    props: { data: page?.conteuSobre },
    revalidate: 30,
  };
};
