import type { NextPage } from 'next';
import {
  Intro,
  Navbar,
  Events,
  Blog,
  SdgsGoals,
  Footer,
} from '@components/common';
import styles from '../styles/Home.module.css';
import Layout from '@components/common/layout';

const Home: NextPage = () => {
  return (
    <Layout>
        <Intro />
        <Events />
        <Blog />
        <SdgsGoals />
    </Layout>
  );
};

export default Home;
