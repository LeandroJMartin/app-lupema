import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { About } from '../lib/querys';
import { ApiData } from '../types/apidata';

const Home: NextPage<ApiData> = ({ apiData }) => {
  const about = apiData.about.AboutPage;
  return (
    <section className="container mt-[100px] sm:mt-[74px] py-[40px] md:py-[80px]">
      <h1 className="title">A Lupema</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 mt-8">
        <div>
          <div className="relative h-[420px]">
            <Image
              src={about?.imagem1?.sourceUrl || ''}
              className="object-cover"
              fill
              alt="Imagem sobre Lupema"
            />
          </div>
          <span className="h-[25px] w-[75%] block ml-[25%] border border-green"></span>
          <p>{about?.descricao}</p>
        </div>
        <div className="relative z-0">
          <div className="flex justify-center my-4">
            <h1 className="px-4 py-4 text-green text-5xl font-light w-[100%] sm:w-[80%]">
              {about?.titulo}
            </h1>
          </div>
          <span className="h-[25px] w-[75%] xl:w-[50%] block border border-green"></span>
          <div className="relative h-[350px]">
            <Image
              src={about?.imagem2?.sourceUrl || ''}
              className="object-cover"
              fill
              alt="Imagem sobre Lupema"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await About.queryExecute();

  return {
    props: {
      apiData: response,
    },
    revalidate: 30,
  };
};
