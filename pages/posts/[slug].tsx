import Layout from '@components/common/layout';
import { BlogDate } from '@components/ui';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next/types';

export default function Post({
  posts,
  post,
  slug,
}: {
  posts: any;
  post: any;
  slug: string;
}) {
  return (
    <Layout
      cssClasses="p-5 md:px-[50px]"
      heroDetails={{
        removeHeroTitle: true,
        label: post?.title,
        bgImgUrl: post.featuredImage?.node?.sourceUrl || '',
        addBelowLabel: (
          <>
            <div className="flex flex-wrap gap-[10px]">
              {post.categories.edges.map((v: any) => (
                <span
                  key={v.node?.id}
                  className="inline-block p-2 font-secondary font-bold text-sm text-white bg-red-300"
                >
                  {v.node.name}
                </span>
              ))}
            </div>
            <BlogDate
              cssClasses="font-secondary font-bold text-sm text-white"
              dateString={post.date}
            />
          </>
        ),
      }}
    >
      <div
        className="w-full"
        dangerouslySetInnerHTML={{ __html: post?.content || '' }}
      />
      <footer>
        {post.tags.edges.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <p className="mt-8 text-lg font-bold">
              Taggeds
              {post.tags.edges.map((tag: any, index: number) => (
                <span key={index} className="ml-4 font-normal">
                  {tag.node.name}
                </span>
              ))}
            </p>
          </div>
        )}
      </footer>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      slug: params?.['slug'],
    },
    revalidate: 10,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
