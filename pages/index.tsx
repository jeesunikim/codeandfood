import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import RelatedStories from "../components/relatedStories";
import HeroPosts from "../components/heroPosts";
import HomeIntro from "../components/HomeIntro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPosts = edges.slice(0, 2);
  const morePosts = edges.slice(3);

  return (
    <Layout preview={preview}>
      <Head>
        <title>codeandfood</title>
      </Head>
      <Container isMainPage>
        <section className="col-span-4">
          {heroPosts && <HeroPosts heroPosts={heroPosts} />}
          {morePosts.length > 0 && <RelatedStories posts={morePosts} />}
        </section>
        <section className="col-span-2">
          <HomeIntro />
        </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
