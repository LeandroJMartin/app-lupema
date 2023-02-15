import BlogItems from '../components/layout/BlogItens';
import { RootQueryToPostConnection } from '../generated';
import ClientApp from '../lib/genql';

interface Props {
  posts: RootQueryToPostConnection;
}

const NoticiasApp = ({ posts }: Props) => {
  return <BlogItems posts={posts} />;
};

export default NoticiasApp;

export const getStaticProps = async () => {
  const { posts } = await ClientApp.query({
    posts: {
      nodes: {
        title: true,
        slug: true,
        featuredImage: {
          node: {
            sourceUrl: true,
          },
        },
        excerpt: true,
      },
    },
  });

  return {
    props: {
      posts,
      revalidate: 30,
    },
  };
};
