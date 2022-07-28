import type { NextPage } from 'next';
import { Intro, Events, Blog, SdgsGoals } from '@components/common';
/* import styles from '../styles/Home.module.css'; */
import Layout from '@components/common/layout';

const Home: NextPage = () => {
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
