import Image from 'next/image';
import { Banner_BannerHome_ImagensProntas } from '../../generated';

interface Props {
  content: Banner_BannerHome_ImagensProntas | undefined;
}

const BannerArt = ({ content }: Props) => {
  const imgs = (
    <div className="h-[550px] xl:h-screen w-full relative">
      <Image
        className="hidden md:block object-cover"
        src={content?.imagemDesktopP?.sourceUrl || ''}
        alt="Imagem Banner"
        fill
      />
      <Image
        className="block md:hidden object-cover"
        src={content?.imagemMobileP?.sourceUrl || ''}
        alt="Imagem Banner"
        fill
      />
    </div>
  );

  return (
    <div>
      {content?.linkDoBannerP ? (
        <a
          href={content?.linkDoBannerP}
          target={content?.abrirEmUmaNovaAba ? '_blank' : '_self'}
        >
          {imgs}
        </a>
      ) : (
        imgs
      )}
    </div>
  );
};

export default BannerArt;
