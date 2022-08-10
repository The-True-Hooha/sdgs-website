import type { NextPage } from 'next';
import { Intro, Events, BlogSection, SdgsGoals } from '@components/common';
/* import styles from '../styles/Home.module.css'; */
import Layout from '@components/common/layout';
import { getAllPostsForHome } from 'lib/api';

const Home: NextPage = ({ allPosts, preview }: any) => {
  console.log(allPosts, preview);
  return (
    <Layout cleanMainCss={true} useHero={false}>
      <Intro />
      <Events />
      <BlogSection posts={allPosts.edges} />
      <SdgsGoals />
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}
