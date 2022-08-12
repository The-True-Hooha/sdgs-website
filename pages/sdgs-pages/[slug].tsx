import Layout from '@components/common/layout';
import { getCMSPage } from '@components/common/Navbar/data/linklist.data';
import { LinkType } from '@components/common/Navbar/model/LinkListType';
import { getAllPostsWithSlug, getPage, getPostAndMorePosts } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next/types';

export default function Page({ data }: any) {
  console.log(data);
  return (
    <Layout
      cssClasses="grid place-items-center min-h-[500px] h-[80vh]"
      useHero={false}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-secondary text-2xl text-center">
          No opening for now. please check back later
        </h1>
      </div>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const data = await getPage(params?.slug);
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = getCMSPage();
  return {
    paths: allPages.map(({ url }: LinkType) => `/sdgs-pages/${url}`) || [],
    fallback: true,
  };
};
