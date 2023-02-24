import { Empreendimento_Empreendimento } from '../../generated';

interface Props {
  name: Empreendimento_Empreendimento | undefined;
}

const TagApp = ({ name }: Props) => {
  return (
    <div className="absolute top-0 right-0 z-10">
      <span className="bg-green text-white py-2 px-3 text-sm uppercase block font-semibold">
        {name?.estagioDaObra?.name}
      </span>
    </div>
  );
};

export default TagApp;
