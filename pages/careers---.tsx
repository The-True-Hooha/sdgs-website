import Layout from '@components/common/layout';
import { getPage, getPostAndMorePosts } from 'lib/api';
import { GetStaticProps } from 'next/types';

export default function Career({ params }: any) {
  console.log(params);
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
  // const data = await getPage();
  // console.log( params );
  return {
    props: {
      params: params?.slug || 'hmm',
    },
    revalidate: 10,
  };
};
