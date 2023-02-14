import TagApp from './Tag';
import { BiBed } from 'react-icons/bi';
import { TbCar } from 'react-icons/tb';
import { TbArrowRightBar } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';

const BlockEmp = () => {
  return (
    <div className="pb-6">
      <div className="relative min-h-[378px] bg-blue/20">
        Imagem
        <TagApp />
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-green my-4">
          <h2 className="text-xl font-medium">Persona Residence</h2>
          <div className="flex items-center justify-end ">
            <div className="flex items-center mr-3">
              <span className="mr-2">3 e 2</span>
              <BiBed size={22} />
            </div>
            <div className="flex items-center">
              <span className="mr-2">3 e 2</span>
              <TbCar size={22} />
            </div>
          </div>
        </div>
        <p className="text-white flex items-center">
          <TbArrowRightBar size={20} />
          <span className="ml-3">73,55m² e 63,15m²</span>
        </p>
        <div className="flex items-center text-white mt-4">
          <GoLocation size={18} />
          <span className="ml-2 text-sm">
            São José do Rio Preto - São Paulo
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlockEmp;
