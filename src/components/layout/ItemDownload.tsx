import Image from 'next/image';
import { BsFileEarmarkText } from 'react-icons/bs';
import { ArquivoAssessoria } from '../../generated';

interface Props {
  file: ArquivoAssessoria;
}

const ItemDownload = ({ file }: Props) => {
  const down =
    file.down_assessoria?.arquivoParaDownload?.mediaItemUrl?.split('/');
  return (
    <>
      <div className="text-white">
        {file.down_assessoria?.downImagem?.sourceUrl ? (
          <div className="relative h-[300px]">
            <Image
              src={file.down_assessoria.downImagem?.sourceUrl || ''}
              fill
              className="object-cover"
              alt="Image capa blog Lupema"
            />
          </div>
        ) : (
          <BsFileEarmarkText />
        )}
        <h2 className="my-3 text-green">{file?.down_assessoria?.downTitulo}</h2>
        <p className="text-sm !leading-5">
          {file?.down_assessoria?.downDescricao}
        </p>
        <a
          href={file.down_assessoria?.arquivoParaDownload?.mediaItemUrl}
          download
          className="block text-green border border-green uppercase text-center py-2 px-3 mt-6 hover:bg-green hover:text-black transition"
        >
          Download
        </a>
      </div>
    </>
  );
};

export default ItemDownload;
