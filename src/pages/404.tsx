import { GetStaticProps } from 'next';
import Link from 'next/link';
import ClientApp from '../lib/genql';

export default function Custom404() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center py-36">
        <h1 className="text-xl lg:text-2xl text-green">
          Ops! Este conteúdo não foi encontrado.
        </h1>

        <div className="pt-4">
          <Link
            href="/"
            className="py-2 px-8 bg-green text-black uppercase font-bold"
          >
            Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { page } = await ClientApp.query({
    page: [
      {
        id: '201',
        idType: 'DATABASE_ID',
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
        social: page?.informacoesDeContato,
      },
    },
  };
};
