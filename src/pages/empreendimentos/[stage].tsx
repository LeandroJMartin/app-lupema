import { GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import BlockEmp from '../../components/layout/BlockEmp';
import FilterApp from '../../components/layout/Filter';
import { Page } from '../../generated';
import ClientApp from '../../lib/genql';

interface Props {
  data: Page;
}

const EmpreendimentosApp: NextPage<Props> = ({ data }) => {
  return (
    <>
      <div className="relative h-[200px] sm:h-[350px] md:h-[500px] border-b-4 border-b-green">
        <Image
          src={data.featuredImage?.node.sourceUrl || ''}
          alt="Imagem Empreendimentos Lupema"
          fill
          className="object-cover"
        />
        <div className="bg-black/20 absolute top-0 left-0 right-0 z-10 w-full h-full"></div>
      </div>
      <section className="container py-[40px]">
        <h2 className="text-lg uppercase text-center">
          Encontre o imóvel ideal
        </h2>
        <FilterApp />
      </section>
      <section className=" bg-bgi py-[40px] md:py-[80px] border-b border-green/50">
        <div className="container">
          <h1 className="title mb-4">{data.title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <BlockEmp />
            <BlockEmp />
            <BlockEmp />
            <BlockEmp />
            <BlockEmp />
            <BlockEmp />
            <BlockEmp />
            <BlockEmp />
            <BlockEmp />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmpreendimentosApp;

const etage = [
  'concluido',
  'em-andamento',
  'lancamento',
  'pronto-para-morar',
  'breve-lancamento',
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = etage?.map((path) => {
    return {
      params: {
        stage: path,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async () => {
  const { page } = await ClientApp.query({
    page: [
      {
        id: '79',
        idType: 'DATABASE_ID',
      },
      {
        title: true,
        featuredImage: {
          node: {
            sourceUrl: true,
          },
        },
      },
    ],
  });

  return {
    props: { data: page },
    revalidate: 30,
  };
};
