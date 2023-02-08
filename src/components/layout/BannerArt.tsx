import Image from 'next/image';

interface Props {
  content: {
    imagemDesktopP: {
      sourceUrl: string;
    };
    imagemMobileP: {
      sourceUrl: string;
    };
    linkDoBannerP: string;
    abrirEmUmaNovaAba: string;
  };
}

const BannerArt = ({ content }: Props) => {
  const imgs = (
    <div className="h-[500px] xl:h-screen w-full relative">
      <Image
        className="hidden md:block object-cover"
        src={content?.imagemDesktopP?.sourceUrl}
        alt="Imagem Banner"
        fill
      />
      <Image
        className="block md:hidden object-cover"
        src={content?.imagemMobileP?.sourceUrl}
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
