import PostPreview from "./post-preview";

export default function RelatedStories({ posts }) {
  return (
    <section className="mt-8 md:mt-12">
      <h2 className="mb-4 text-3xl font-bold tracking-tighter leading-tight">
        Related
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-11 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
