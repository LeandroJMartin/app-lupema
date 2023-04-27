import { RootQueryToArquivoAssessoriaConnection } from '../../generated';
import ItemDownload from './ItemDownload';
import SlideApp from './Slide';

interface Props {
  materias: RootQueryToArquivoAssessoriaConnection;
}

const DownloadsApp = ({ materias }: Props) => {
  const items = materias?.nodes.map((item) => {
    return <ItemDownload file={item} />;
  });

  const array = [...items, ...items, ...items, ...items];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <SlideApp
      items={array}
      infinite={true}
      largura={{ desktop: 0, mobile: 0 }}
      navigation={false}
      dots={true}
      responsive={responsive}
    />
  );
};

export default DownloadsApp;
