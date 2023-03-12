import Avatar from "./avatar";
import Date from "./Date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPosts({ heroPosts }) {
  return (
    <section>
      {heroPosts.map(({ node }) => (
        <div key={node.slug}>
          <div className="mb-8">
            {node.featuredImage && (
              <CoverImage
                title={node.title}
                coverImage={node.featuredImage}
                slug={node.slug}
              />
            )}
          </div>
          <div className="grid grid-rows-2">
            <div>
              <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                <Link
                  href={`/posts/${node.slug}`}
                  className="hover:underline"
                  dangerouslySetInnerHTML={{ __html: node.title }}
                ></Link>
              </h3>
              <div className="mb-4 md:mb-0 text-md font-mono">
                <Date dateString={node.date} />
              </div>
            </div>
            <div>
              <div
                className="text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
