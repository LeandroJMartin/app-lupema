import { BsSearch } from 'react-icons/bs';

const SearchApp = () => {
  return (
    <form className="relative">
      <input
        type="search"
        name="search"
        placeholder="Pesquisar"
        className="placeholder:text-green bg-transparent w-full"
      />
      <button className="absolute top-0 right-0 py-3 px-3">
        <BsSearch className="text-green" />
      </button>
    </form>
  );
};

export default SearchApp;
