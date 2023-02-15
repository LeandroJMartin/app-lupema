import Image from 'next/image';
import { RootQueryToPostConnection } from '../../generated';

interface Props {
  posts: RootQueryToPostConnection;
}

const BlogItems = ({ posts }: Props) => {
  return (
    <>
      {posts?.nodes.map((post, index) => {
        return (
          <div key={index}>
            <div className="relative h-[300]">
              <Image
                src={post.featuredImage?.node.sourceUrl || ''}
                fill
                className="object-cover"
                alt="Image capa blog Lupema"
              />
            </div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href="">Leia mais</a>
          </div>
        );
      })}
    </>
  );
};

export default BlogItems;
