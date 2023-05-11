import { string } from 'yup';
import { RootQueryToEmpreendimentoConnection } from '../../generated';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
  data: RootQueryToEmpreendimentoConnection;
  resultDataState: (data: any) => void;
}

interface StatusObject {
  [key: string]: string | undefined;
}

const FilterApp = ({ data, resultDataState }: Props) => {
  const { query } = useRouter();
  const [selectedSlug, setSelectedSlug] = useState(query.stage);

  const statusObject = data.nodes.reduce((obj: StatusObject, item) => {
    const key = item.empreendimento?.estagioDaObra?.slug;
    const value = item.empreendimento?.estagioDaObra?.name;

    if (key !== undefined && !(key in obj)) {
      obj[key] = value;
    }

    return obj;
  }, {});

  useEffect(() => {
    setSelectedSlug(query.stage);
  }, [query.stage]);

  const handleButtonClick = (slug: string) => {
    resultDataState(slug);
    setSelectedSlug(slug);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
      <button
        onClick={() => handleButtonClick('todos')}
        className={`uppercase px-4 py-1 border border-green ${
          selectedSlug === 'todos' ? 'text-white bg-green' : 'text-green'
        }`}
      >
        Todos
      </button>
      {Object.keys(statusObject).map((slug) => (
        <button
          key={slug}
          onClick={() => handleButtonClick(slug)}
          className={`text-green uppercase px-4 py-1 border border-green hover:text-white hover:bg-green ${
            selectedSlug === slug ? 'text-white bg-green' : ''
          }`}
        >
          {statusObject[slug]}
        </button>
      ))}
    </div>
  );
};

export default FilterApp;
