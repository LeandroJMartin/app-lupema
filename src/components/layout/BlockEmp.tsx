import TagApp from './Tag';
import { BiBed } from 'react-icons/bi';
import { TbCar } from 'react-icons/tb';
import { TbArrowRightBar } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { Empreendimento } from '../../generated';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  content: Empreendimento | undefined;
  main: boolean;
}

const BlockEmp = ({ content, main = true }: Props) => {
  if (!content) return null;

  return (
    <Link href={`/empreendimento/${content.slug}`} className="pb-6">
      <div className="relative bg-blue/20 aspect-auto">
        <Image
          src={content.empreendimento?.imagemPrincipal?.sourceUrl || ''}
          width={480}
          height={670}
          alt="Imagem principal"
        />
        <TagApp name={content.empreendimento} />
      </div>
      <div>
        <div className="grid grid-cols-3 text-green mt-4">
          <div className="col-span-2">
            <h2 className="text-xl font-medium">
              {content.empreendimento?.nomeDoEmpreendimento}
            </h2>
            {main && (
              <>
                <p className="text-white flex items-center my-1">
                  <TbArrowRightBar size={20} />
                  <span className="ml-3">
                    {content.empreendimento?.empMetragem}
                  </span>
                </p>
                <div className="flex items-center text-white">
                  <GoLocation size={18} />
                  <span className="ml-2 text-sm">
                    {content.empreendimento?.empCidade}
                  </span>
                </div>
              </>
            )}
          </div>
          {main && (
            <div className="">
              <div className="flex">
                <BiBed size={22} />
                <span className="ml-2">
                  {content.empreendimento?.empDormitorios}
                </span>
                <p className="ml-1">dorms</p>
              </div>
              <div className="flex">
                <TbCar size={22} />
                <span className="ml-2">
                  {content.empreendimento?.empVagasDeGaragem}
                </span>
                <p className="ml-1">vagas</p>
              </div>
            </div>
          )}

          {!main && (
            <span className="italic text-white text-sm">Saiba mais</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlockEmp;
