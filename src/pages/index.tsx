import type { GetStaticProps, NextPage } from 'next';
import EmpSlideHome from '../components/layout/EmpSlideHome';
import HeroApp from '../components/layout/Hero';
import { ExecuteAllQuerys } from '../lib/querys';
import { ApiData } from '../types/apidata';

const Home: NextPage<ApiData> = ({ apiData }) => {
  return (
    <>
      <HeroApp Banners={apiData.banners} />
      <EmpSlideHome />;
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await ExecuteAllQuerys();

  return {
    props: {
      apiData: response,
    },
    revalidate: 30,
  };
};
