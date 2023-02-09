import { RootQueryToBannerConnection } from '../../generated/graphql';
import BannerArt from './BannerArt';
import BannerCustom from './BannerCustom';
import SlideApp from './Slide';

interface Props {
  Banners: RootQueryToBannerConnection | undefined;
}

const HeroApp = ({ Banners }: Props) => {
  const items = Banners?.nodes.map((item) => {
    if (item.banner_home?.bannerPronto === true) {
      return <BannerArt content={item.banner_home.imagensProntas} />;
    } else {
      return <BannerCustom content={item.banner_home?.bhConteudo} />;
    }
  });

  return (
    <div className="hero">
      <SlideApp items={items} navigation={true} largura={0} infinite={false} />
    </div>
  );
};

export default HeroApp;
