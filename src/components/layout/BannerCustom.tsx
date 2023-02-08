import Image from 'next/image';
import SlideApp from './Slide';

interface Props {
  content: {
    bhImagemDesktop: {
      sourceUrl: string;
    };
    bhImagemMobile: {
      sourceUrl: string;
    };
    bhNomeDoEmpreendimento: string;
    bhQuantDormitorios: string;
    bhQuantVagasGaragem: string;
    bhMetrosQuadrado: string;
    bhMetrosQuadradoMaior: string;
    bhTextoDoBotao: string;
    bhLinkBanner: string;
    bhNovaAba: string;
  };
}

const BannerCustom = ({ content }: Props) => {
  console.log(content);
  const imgs = (
    <div className="h-[500px] xl:h-screen w-full relative">
      <Image
        className="hidden md:block object-cover"
        src={content?.bhImagemDesktop?.sourceUrl}
        alt="Imagem Banner"
        fill
      />
      <Image
        className="block md:hidden object-cover"
        src={content?.bhImagemMobile?.sourceUrl}
        alt="Imagem Banner"
        fill
      />
    </div>
  );

  return (
    <div>
      {content.bhLinkBanner ? (
        <a
          href={content?.bhLinkBanner}
          target={content?.bhNovaAba ? '_blank' : '_self'}
        >
          {imgs}
        </a>
      ) : (
        imgs
      )}
    </div>
  );
};

export default BannerCustom;
