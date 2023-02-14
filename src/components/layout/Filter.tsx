import { BsSearch, BsFilterRight } from 'react-icons/bs';

const FilterApp = () => {
  return (
    <form action="" method="POST">
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
          <select name="bairro" className="border border-green py-2 px-3">
            <option value="bairro 1">Bairro 1</option>
            <option value="bairro 2">Bairro 2</option>
          </select>
          <select name="tipo" className="border border-green py-2 px-3">
            <option value="tipo-imovel">Tipo de imóvel 1</option>
            <option value="tipo-imovel2">Tipo de imóvel 2</option>
          </select>
          <select name="estagio" className="border border-green py-2 px-3">
            <option value="tipo-imovel">Estágio da obra</option>
            <option value="estagio-da-obra2">Estágio da obra 2</option>
          </select>
        </div>
        <div className="flex justify-center mt-6">
          <input
            type="submit"
            value="Buscar"
            className="text-black uppercase px-6 py-2 bg-green mr-3"
          />
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
