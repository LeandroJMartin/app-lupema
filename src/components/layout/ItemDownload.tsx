import Image from 'next/image';
import { BsFileEarmarkText } from 'react-icons/bs';
import { ArquivoAssessoria } from '../../generated';

interface Props {
  file: ArquivoAssessoria;
}

const ItemDownload = ({ file }: Props) => {
  return (
    <>
      <div className="text-white">
        {file.down_assessoria?.downImagem?.sourceUrl ? (
          <div className="relative h-[300px]">
            <a href="{file}">
              <Image
                src={file.down_assessoria?.downImagem?.sourceUrl || ''}
                fill
                className="object-cover"
                alt="Image capa blog Lupema"
              />
            </a>
          </div>
        ) : (
          <BsFileEarmarkText />
        )}
        <h2 className="my-3 text-white min-h-[55px]">
          {file.down_assessoria?.downTitulo}
        </h2>
        <a
          href={file.down_assessoria?.linkDaMateria}
          download
          className="block text-green border border-green uppercase text-center py-2 px-3 hover:bg-green hover:text-black transition"
        >
          Leia a matéria completa
        </a>
      </div>
    </>
  );
};

export default ItemDownload;
