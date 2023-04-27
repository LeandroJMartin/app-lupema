import { useState } from 'react';
import { BsFilterRight, BsSearch } from 'react-icons/bs';
import {
  RootQueryToEmpreendimentoConnection,
  RootQueryToEmpreendimentoConnectionWhereArgs,
  RootQueryToEmpreendimentoConnectionWhereArgsMetaArray,
  TaxQuery,
} from '../../generated';
import ClientApp from '../../lib/genql';

interface Props {
  data: RootQueryToEmpreendimentoConnection;
  resultDataState: (data: any) => void;
}

const FilterApp = ({ data, resultDataState }: Props) => {
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    let data = { search: '', bairro: '', tipo: '', estagio: '' };

    for (let [key, value] of formData.entries()) {
      if (key === 'search') data.search = value as string;
      if (key === 'bairro') data.bairro = value as string;
      if (key === 'tipo') data.tipo = value as string;
      if (key === 'estagio') data.estagio = value as string;
    }

    if (
      data.search === '' &&
      data.bairro === 'false' &&
      data.tipo === 'false' &&
      data.estagio === 'false'
    )
      return;

    setLoading(true);

    const qBairro = {
      compare: 'EQUAL_TO',
      key: 'endereco_bairro',
      value: data?.bairro || null,
    };

    const qTipo = {
      compare: 'EQUAL_TO',
      key: 'tipo_do_empreendimento',
      value: data?.tipo || null,
    };

    const qEstagio = {
      relation: 'OR',
      taxArray: [
        {
          taxonomy: 'CATEGORY',
          operator: 'IN',
          field: 'NAME',
          terms: [data?.estagio],
        },
      ],
    };

    const cQuery = [];

    if (data.bairro !== 'false') {
      cQuery.push(qBairro);
    }

    if (data.tipo !== 'false') {
      cQuery.push(qTipo);
    }

    let completeWhere: RootQueryToEmpreendimentoConnectionWhereArgs = {
      metaQuery: {
        relation: 'OR',
        metaArray:
          cQuery as RootQueryToEmpreendimentoConnectionWhereArgsMetaArray[],
      },
    };

    if (data.search !== '') {
      completeWhere = {
        ...completeWhere,
        search: data.search,
      };
    }

    if (data.estagio !== 'false') {
      completeWhere = {
        ...completeWhere,
        taxQuery: qEstagio as TaxQuery,
      };
    }

    const result = await ClientApp.query({
      empreendimentos: [
        {
          where: completeWhere as RootQueryToEmpreendimentoConnectionWhereArgs,
        },
        {
          nodes: {
            empreendimento: {
              imagemPrincipal: {
                sourceUrl: true,
              },
              nomeDoEmpreendimento: true,
              estagioDaObra: {
                name: true,
                slug: true,
              },
              empCidade: true,
              empMetragem: true,
              empDormitorios: true,
              empVagasDeGaragem: true,
              enderecoBairro: true,
              tipoDoEmpreendimento: true,
            },
            slug: true,
          },
        },
      ],
    });

    if (result.empreendimentos?.nodes) {
      resultDataState(result.empreendimentos);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} onReset={() => resultDataState(null)}>
      <div className="relative">
        <input
          type="search"
          name="search"
          placeholder="Faça sua busca"
          className="border border-green py-2 px-3 w-full"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 py-3 px-4 z-10"
          aria-label="Botão de pesquisa"
        >
          <BsSearch size={18} className="text-green" />
        </button>
      </div>

      <details className="mt-3">
        <summary className="flex items-center justify-end mb-2 cursor-pointer">
          Busca avançada <BsFilterRight size={22} className="ml-3" />
        </summary>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <select name="bairro" className="border border-green py-2 px-3">
            <option value="false">Bairro</option>
            {GetObjects('bairro').map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>

          <select name="tipo" className="border border-green py-2 px-3">
            <option value="false">Tipo de imóvel</option>
            {GetObjects('tipo').map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>

          <select name="estagio" className="border border-green py-2 px-3">
            <option value="false">Estágio da obra</option>
            {GetObjects('estagio').map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>

        <div className="flex justify-center mt-6">
          {loading ? (
            <span className="text-sm text-zinc-500">Buscando...</span>
          ) : (
            <>
              <button
                aria-label="Botão buscar"
                value="Buscar"
                className="text-black uppercase px-6 py-2 bg-green mr-3"
              >
                Buscar
              </button>
              <button
                aria-label="Botão limpar filtro"
                type="reset"
                className="text-green uppercase px-6 py-2 border border-green"
              >
                Limpar filtro
              </button>
            </>
          )}
        </div>
      </details>
    </form>
  );
};

export default FilterApp;
