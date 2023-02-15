import { RootQueryToArquivoAssessoriaConnection } from '../../generated';
import ItemDownload from './ItemDownload';
import SlideApp from './Slide';

interface Props {
  files: RootQueryToArquivoAssessoriaConnection;
}

const DownloadsApp = ({ files }: Props) => {
  const items = files?.nodes.map((item) => {
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
      largura={0}
      navigation={true}
      responsive={responsive}
    />
  );
};

export default DownloadsApp;
