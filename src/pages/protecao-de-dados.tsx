import { NextPage } from 'next';
import ClientApp from '../lib/genql';
import FormProtecarDeDados from '../components/layout/forms/FormProtecaoDeDados';
import { useEffect, useState } from 'react';

interface TT {
  name: string;
}

const ProtecaoDeDados: NextPage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, []);

  const locale = 'pt-br';
  const formattedDate = date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className="container w-full md:w-[70%] py-[40px] md:py-[80px] mt-[100px] sm:mt-[74px]">
      <h1 className="text-2xl sm:text-3xl text-green text-center">
        Preteção de Dados
      </h1>
      <p className="mb-8 text-center">
        Formulário de solicitação de informações de dados pessoais
      </p>
      <h2 className="font-bold mb-4 text-xl">Prezado(a) Sr(a).</h2>
      <p>
        De acordo com a Lei No 13.709, de 14 de agosto de 2018 - Lei Geral de
        Proteção de Dados Pessoais (LGPD) e o Provimento CGJ nº 23/2020 (Dispõe
        sobre o tratamento e proteção de dados pessoais pelos responsáveis pelas
        delegações dos serviços extrajudiciais de notas e de registro), SOLICITO
        a V.Sa. exercer meu direito como TITULAR DOS DADOS para a seguinte
        situação:
      </p>
      {<FormProtecarDeDados />}
      <span className="ml-auto mt-6 inline-block">{formattedDate}</span>
    </section>
  );
};

export default ProtecaoDeDados;

export const getStaticProps = async () => {
  const { pageBy } = await ClientApp.query({
    pageBy: [
      {
        pageId: 201,
      },
      {
        informacoesDeContato: {
          coTelefone: true,
          coWhatsapp: true,
          coEmail: true,
          coEndereco: true,
          linkFacebook: true,
          linkInstagram: true,
          linkYoutube: true,
        },
      },
    ],
  });

  return {
    props: {
      data: {
        social: pageBy?.informacoesDeContato,
      },
      revalidate: 30,
    },
  };
};
