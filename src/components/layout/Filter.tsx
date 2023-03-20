import { useState } from 'react';
import { BsSearch, BsFilterRight } from 'react-icons/bs';
import { RootQueryToEmpreendimentoConnection } from '../../generated';

interface Props {
  data: RootQueryToEmpreendimentoConnection;
  childToParent: any;
}

const FilterApp = ({ data, childToParent }: Props) => {
  const [selectValue, setSelectValue] = useState('');

  function ClearText(text: any) {
    const clearText = text?.normalize('NFD').replace(/[^a-zA-Z\s]/g, '');
    return clearText?.replace(/\s/g, '').toLowerCase();
  }

  const GetObjects = (object: string) => {
    const itens = data.nodes.map((el) => {
      if (object === 'bairro') {
        return el.empreendimento?.enderecoBairro;
      }
      if (object === 'tipo') {
        return el.empreendimento?.tipoDoEmpreendimento;
      }
      if (object === 'estagio') {
        return el.empreendimento?.estagioDaObra?.name;
      }
    }, []);

    const newArray = [...new Set(itens)];

    return newArray.filter(function (i) {
      return i;
    });
  };

  return (
    <form>
      <div className="relative">
        <input
          type="search"
          name="search"
          placeholder="Faça sua busca"
          className="border border-green py-2 px-3 w-full"
        />
        <button type="submit" className="absolute top-0 right-0 py-3 px-4 z-10">
          <BsSearch size={18} className="text-green" />
        </button>
      </div>

      <details className="mt-3">
        <summary className="flex items-center justify-end mb-2 cursor-pointer">
          Busca avançada <BsFilterRight size={22} className="ml-3" />
        </summary>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <select
            name="bairro"
            className="border border-green py-2 px-3"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="false">Bairro</option>
            {GetObjects('bairro').map((item) => {
              return <option value={ClearText(item)}>{item}</option>;
            })}
          </select>
          <select
            name="tipo"
            className="border border-green py-2 px-3"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="false">Tipo de imóvel</option>
            {GetObjects('tipo').map((item) => {
              return <option value={ClearText(item)}>{item}</option>;
            })}
          </select>
          <select
            name="estagio"
            className="border border-green py-2 px-3"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="false">Estágio da obra</option>
            {GetObjects('estagio').map((item) => {
              return <option value={ClearText(item)}>{item}</option>;
            })}
          </select>
        </div>

        <div className="flex justify-center mt-6">
          <button
            value="Buscar"
            className="text-black uppercase px-6 py-2 bg-green mr-3"
            onClick={() => childToParent(selectValue)}
          >
            Buscar
          </button>
          <button
            type="reset"
            className="text-green uppercase px-6 py-2 border border-green"
          >
            Limpar filtro
          </button>
        </div>
      </details>
    </form>
  );
};

export default FilterApp;
