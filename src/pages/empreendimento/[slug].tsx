import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ClientApp from '../../lib/genql';

interface Props {
  apiData: any;
}

const EmpreendimentoApp: NextPage<Props> = ({ apiData }) => {
  return;
};

export default EmpreendimentoApp;

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
