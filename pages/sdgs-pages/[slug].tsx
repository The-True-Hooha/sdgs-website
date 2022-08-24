import Layout from '@components/common/layout';
import {
  getCMSPage,
  getPageDataBySlug,
} from '@components/common/Navbar/data/linklist.data';
import { LinkType } from '@components/common/Navbar/model/LinkListType';
import { getPage } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next/types';

export default function Page({
  data,
  pageLinkData,
  slug,
}: {
  data: any;
  pageLinkData: LinkType | null;
  slug: string;
}) {
  return (
    <Layout
      heroDetails={{
        label: pageLinkData?.label,
      }}
    >
      <div
        className="w-full"
        dangerouslySetInnerHTML={{ __html: data?.content || '' }}
      />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPage(params!.slug);
  return {
    props: {
      data,
      pageLinkData: getPageDataBySlug(params!.slug as string),
      slug: params?.['slug'],
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
