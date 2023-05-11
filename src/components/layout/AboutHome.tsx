import Image from 'next/image';
import Link from 'next/link';
import { Page_Conteusobre } from '../../generated';

interface Props {
  about: Page_Conteusobre;
}

const AboutHome = ({ about }: Props) => {
  return (
    <section className="bg-white py-[40px] md:py-[80px]">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="relative h-[420px]">
            <Image
              src={about?.imagem1?.sourceUrl || ''}
              className="object-cover"
              fill
              alt="Imagem sobre Lupema"
            />
          </div>
          <span className="h-[25px] w-[75%] xl:w-[50%] bg-bgi block ml-[25%] sm:ml-[50%]"></span>
        </div>
        <div className="relative z-0">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
            <h1 className="px-4 py-4 text-green text-5xl font-light leading-[4rem] pl-8">
              {about?.tituloSobreHome}
            </h1>
            <p
              className="px-4 pt-3 pb-1 text-sm leading-8"
              dangerouslySetInnerHTML={{
                __html: about?.descricaoSobreHome || '',
              }}
            />
          </div>
          <span className="h-[25px] w-[75%] xl:w-[50%] bg-bgi block"></span>
          <div className="relative h-[300px]">
            <Image
              src={about?.imagem2?.sourceUrl || ''}
              className="object-cover"
              fill
              alt="Imagem sobre Lupema"
            />
          </div>
          <span className="absolute -bottom-7 right-6 sm:-right-6 h-[200px] w-[250px] sm:w-[300px] border border-green bg-transparent -z-10"></span>
        </div>
      </div>
      <Link href="/a-lupema" className="button mt-14 mx-auto">
        Conheça mais
      </Link>
    </section>
  );
};

export default AboutHome;
