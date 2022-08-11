import { BlogPreviewCard } from '@components/ui';

const blogPosts = [
  {
    title: 'Blog Post 1',
    date: '2020-01-01',
    content: 'This is the content of the first blog post',
    image: '',
    link: '',
    category: '',
  },
  {
    title: 'Blog Post 1',
    date: '2020-01-01',
    content: 'This is the content of the first blog post',
    image: '',
    link: '',
    category: '',
  },
  {
    title: 'Blog Post 1',
    date: '2020-01-01',
    content: 'This is the content of the first blog post',
    image: '',
    link: '',
    category: '',
  },
  {
    title: 'Blog Post 1',
    date: '2020-01-01',
    content: 'This is the content of the first blog post',
    image: '',
    link: '',
    category: '',
  },
  {
    title: 'Blog Post 1',
    date: '2020-01-01',
    content: 'This is the content of the first blog post',
    image: '',
    link: '',
    category: '',
  },
];

const BlogSection = ({ posts }: any): JSX.Element => {
  return (
    <section
      aria-labelledby="blogs"
      className="p-0 md:px-[50px] md:py-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div className="w-full md:w-[300px] p-5">
        <h2 id="blogs" className="uppercase font-secondary text-[50px]">
          Recent <br />
          Blog
        </h2>
      </div>
      {posts.map(({ node }: any) => (
        <BlogPreviewCard
          key={node.slug}
          title={node.title}
          coverImage={node.featuredImage?.node?.sourceUrl || ''}
          date={node.date}
          author={node.author}
          slug={node.slug}
          excerpt={node.excerpt}
          categories={node.categories.edges.map((v: any) => v.node)}
        />
      ))}
    </section>
  );
};

export default BlogSection;
