import Layout from '@components/common/layout';
import { getCMSPage } from '@components/common/Navbar/data/linklist.data';
import { LinkType } from '@components/common/Navbar/model/LinkListType';
import { getAllPostsWithSlug, getPage, getPostAndMorePosts } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next/types';

export default function Page({ data }: any) {
  console.log(data);
  return (
    <Layout
      cssClasses=""
      useHero={false}
    >
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
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
