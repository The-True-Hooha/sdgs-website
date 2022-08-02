import type { NextPage } from 'next';
import { Intro, Events, Blog, SdgsGoals } from '@components/common';
/* import styles from '../styles/Home.module.css'; */
import Layout from '@components/common/layout';
import { getAllPostsForHome } from 'lib/api';

const Home: NextPage = ( { allPosts, preview }: any ) => {
  console.log(allPosts, preview);
  return (
    <Layout cleanMainCss={true} useHero={false}>
      <Intro />
      <Events />
      <Blog />
      <SdgsGoals />
    </Layout>
  );
};

export default Home;

async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}
