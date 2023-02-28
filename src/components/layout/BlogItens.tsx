import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../../generated';

interface Props {
  post: Post;
}

const BlogItems = ({ post }: Props) => {
  return (
    <div>
      <Link href={`/noticia/${post.slug}`}>
        <div className="relative h-[230px] sm:h-[280px] md:h-[350px]">
          <Image
            src={post.featuredImage?.node.sourceUrl || ''}
            fill
            className="object-cover"
            alt="Image capa blog Lupema"
          />
        </div>
      </Link>
      <Link href={`/noticia/${post.slug}`}>
        <h2 className="text-green text-2xl my-2">{post.title}</h2>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: post.excerpt || '',
        }}
      />
      <Link
        href={`/noticia/${post.slug}`}
        className="text-green mt-2 block w-max"
      >
        Leia mais
      </Link>
    </div>
  );
};

export default BlogItems;
