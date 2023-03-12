import Avatar from "./avatar";
import Date from "./Date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import Tags from "./tags";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  tags,
}) {
  return (
    <>
      <div className="flex justify-between text-center font-mono mb-4 text-sm">
        <Date dateString={date} />
        <Categories categories={categories} />
        <div>{tags.edges.length > 0 && <Tags tags={tags} />}</div>
      </div>
      <PostTitle>{title}</PostTitle>
      {/* <div className="grid grid-rows-2 text-base justify-items-center mb-4"></div> */}
      {/* <span className="ml-1">
            <Avatar author={author} />
          </span> */}

      <div className="max-w-3xl mx-auto">
        <div className="sm:px-1 px-4 mb-8">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      </div>
    </>
  );
}
