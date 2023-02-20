import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
  staticImage?: string;
}

export default function CoverImage({
  title,
  coverImage,
  staticImage,
  slug,
}: Props) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl || staticImage}
    />
  );
  return (
    <div className="sm:mx-auto md:w-full md:m-0 md:max-w-3xl">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
