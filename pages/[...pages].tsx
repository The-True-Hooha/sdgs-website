import Layout from '@components/common/layout';
import {
  getCMSPage,
  getPageDataBySlug,
} from '@components/common/Navbar/data/linklist.data';
import { LinkType } from '@components/common/Navbar/model/LinkListType';
import { getPage } from 'lib/api';
import { GetStaticPaths, GetStaticPropsContext } from 'next/types';

export default function Page({
  data,
  pageLinkData,
}: {
  data: any;
  pageLinkData: LinkType | null;
}) {
  console.log(data);
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
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ pages: string[] }>) => {
  let data = null;
  const page = params!.pages[0];
  try {
    data = await getPage(page);
    if (data === null) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/500',
      },
    };
  }
  return {
    props: {
      data,
      pageLinkData: getPageDataBySlug(page as string),
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
