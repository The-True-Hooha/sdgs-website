import type { NextPage } from 'next';
import { Intro, BlogSection, SdgsGoals } from '@components/common';
import Layout from '@components/common/layout';
import { getAllPostsForHome } from 'lib/api';

const Home: NextPage = ({ allPosts }: any) => {

  return (
    <Layout cleanMainCss={true} useHero={false}>
      <Intro />
      <div className="pt-[100px]">
        <BlogSection posts={allPosts.edges} />
      </div>
      <SdgsGoals />
      <section
        aria-labelledby="sdgs video"
        className="p-0 md:px-[50px] md:py-[50px] flex flex-wrap items-center"
      >
        <div className="w-full md:w-3/12 p-5 md:p-0">
          <h2 id="blogs" className="uppercase font-secondary text-[50px]">
            SDGs Goals as a Video
          </h2>
        </div>
        <div className="w-full md:w-9/12">
          <iframe
            className="w-full min-h-[600px]"
            src="https://www.youtube.com/embed/0XTBYMfZyrM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

/* export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
} */
export async function getServerSideProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
