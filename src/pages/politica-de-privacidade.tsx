import { NextPage } from 'next';
import { Page, Page_Informacoesdecontato } from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  data: {
    page: Page;
    social: Page_Informacoesdecontato;
  };
}

const PoliticaDePrivacidade: NextPage<Props> = ({ data }) => {
  return (
    <section className="container py-[40px] md:py-[80px] mt-[100px] sm:mt-[74px]">
      <h1 className="border-green border sm:border-0 px-4 sm:px-0 py-3 sm:py-0 text-2xl sm:text-3xl text-green mb-8 relative">
        {data.page?.title}
      </h1>
      {
        <p
          dangerouslySetInnerHTML={{
            __html: data.page?.content || '',
          }}
          className=""
        />
      }
    </section>
  );
};

export default PoliticaDePrivacidade;

export const getStaticProps = async () => {
  const { page, pageBy } = await ClientApp.query({
    page: [
      {
        id: '3',
        idType: 'DATABASE_ID',
      },
      {
        title: true,
        content: true,
      },
    ],
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
        page: page,
        social: pageBy?.informacoesDeContato,
      },
      revalidate: 30,
    },
  };
};
