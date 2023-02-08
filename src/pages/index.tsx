import type { GetStaticProps, NextPage } from 'next';
import HeroApp from '../components/layout/Hero';
import { ExecuteAllQuerys } from '../lib/querys';

const Home: NextPage = ({ apiDate }: any) => {
  console.log(apiDate);
  return <HeroApp Banners={apiDate.banners} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await ExecuteAllQuerys();

  return {
    props: {
      apiDate: response,
    },
    revalidate: 30,
  };
};
