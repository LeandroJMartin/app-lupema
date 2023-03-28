import { useRouter } from 'next/router';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchApp = () => {
  const navigate = useRouter();

  const inputSearchRef = useRef<HTMLInputElement>(null);

  const handleClickSubmit = () => {
    inputSearchRef?.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = e.currentTarget[0] as HTMLInputElement;

    if (formData.value) {
      await navigate.push(`/pesquisa?s=${formData.value}`);

      form.reset();
    }
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Pesquisar"
        className="text-white placeholder:text-white bg-transparent w-full border-white/20"
      />

      <input type="search" ref={inputSearchRef} className="hidden" />

      <button
        aria-label="Botão pesquisar"
        className="absolute top-0 right-0 py-3 px-3"
        onClick={handleClickSubmit}
      >
        <BsSearch className="text-white" />
      </button>
    </form>
  );
};

export default SearchApp;
