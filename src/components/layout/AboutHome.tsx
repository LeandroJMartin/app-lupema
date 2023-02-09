import Image from 'next/image';
import { Maybe, Page_Conteusobre } from '../../generated/graphql';

interface Props {
  about: Maybe<Page_Conteusobre> | undefined;
}

const AboutHome = ({ about }: Props) => {
  return (
    <section className="container">
      <div className="grid grid-cols-2">
        <div className="relative max-h-[420px]">
          <Image
            src={about?.imagem1?.sourceUrl || ''}
            className="object-cover"
            fill
            alt="Imagem sobre Lupema"
          />
        </div>
        <div className="">
          <div className="grid grid-cols-2">
            <h1 className="px-4 py-4 text-green title">
              {about?.tituloSobreHome}
            </h1>
            <p className="px-4 py-4">{about?.descricaoSobreHome}</p>
          </div>
          <div className="relative max-h-[420px]">
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

export default AboutHome;
