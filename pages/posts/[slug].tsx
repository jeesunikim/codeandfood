import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import RelatedStories from "../../components/relatedStories";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;
  const isCodeCategory = post?.categories.edges[0].node.name === "Code";
  const title = `${post.title} | ${CMS_NAME}`;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container isCodeCategory={isCodeCategory}>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{title}</title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
                tags={post.tags}
              />
              <PostBody
                isCodeCategory={isCodeCategory}
                content={post.content}
              />
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <RelatedStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
