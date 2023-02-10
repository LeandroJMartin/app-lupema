import type { GetStaticProps, NextPage } from 'next';
import AboutHome from '../components/layout/AboutHome';
import EmpSlideHome from '../components/layout/EmpSlideHome';
import HeroApp from '../components/layout/Hero';
import NewsletterApp from '../components/layout/Newsletter';
import { ExecuteAllQuerys } from '../lib/querys';
import { ApiData } from '../types/apidata';

const Home: NextPage<ApiData> = ({ apiData }) => {
  return (
    <>
      <HeroApp Banners={apiData.banners} />
      <EmpSlideHome />
      <AboutHome about={apiData.about} />
      <NewsletterApp />
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
