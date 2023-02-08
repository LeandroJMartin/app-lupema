import BannerArt from './BannerArt';
import BannerCustom from './BannerCustom';
import SlideApp from './Slide';

interface Props {
  Banners: {
    checker: boolean;
    art: {
      imagemDesktopP: {
        sourceUrl: string;
      };
      imagemMobileP: {
        sourceUrl: string;
      };
      linkDoBannerP: string;
      abrirEmUmaNovaAba: string;
    };
    custom: {
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
  }[];
}

const HeroApp = ({ Banners }: Props) => {
  const items = Banners.map((item) => {
    if (item.checker === true) {
      return <BannerArt content={item.art} />;
    } else {
      return <BannerCustom content={item.custom} />;
    }
  });

  return (
    <div className="container hero">
      <SlideApp items={items} />
    </div>
  );
};

export default HeroApp;
