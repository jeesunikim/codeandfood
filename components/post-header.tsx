import Avatar from "./avatar";
import Date from "./Date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="grid grid-rows-2 text-base justify-items-center mb-4">
        <div>
          <Date dateString={date} />
        </div>
        <div>
          <Categories categories={categories} />
          <span className="ml-1">
            <Avatar author={author} />
          </span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="sm:px-1 px-4 mb-8">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      </div>
    </>
  );
}
