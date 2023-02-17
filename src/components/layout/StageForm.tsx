import { BsFillCheckCircleFill } from 'react-icons/bs';

interface Props {
  quant: number;
  stage: number;
}

interface ItemProp {
  stage: number;
  index: number;
}

const StageForm = ({ quant, stage }: Props) => {
  const Quant = [];

  for (let index = 0; index < quant; index++) {
    Quant.push(<Item stage={stage} index={index} />);
  }

  return (
    <div className="w-[70%] mx-auto relative my-6">
      <div className="flex items-center justify-between z-10 relative">
        {Quant}
      </div>
      <span className="h-[3px] bg-green absolute top-4 left-0 right-0 w-full -z-0"></span>
    </div>
  );
};

export default StageForm;

const Item = ({ stage, index }: ItemProp) => {
  return (
    <span
      className={`rounded-full text-white w-[30px] h-[30px] flex items-center justify-center ${
        index === stage ? 'bg-blue' : 'bg-black'
      }`}
    >
      {index < stage ? (
        <span className="bg-white w-[30px] h-[30px] block rounded-full">
          <BsFillCheckCircleFill size={30} className="text-green" />
        </span>
      ) : (
        index
      )}
    </span>
  );
};
