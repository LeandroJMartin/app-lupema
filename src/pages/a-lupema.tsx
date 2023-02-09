import { GetStaticProps, NextPage } from 'next';
import { About } from '../lib/querys';
import { ApiData } from '../types/apidata';

const Home: NextPage<ApiData> = ({ apiData }) => {
  // console.log(apiData);

  return (
    <section>
      <h1>A Lupema</h1>
    </section>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await About.queryExecute();

  return {
    props: {
      apiData: response,
    },
    revalidate: 30,
  };
};
