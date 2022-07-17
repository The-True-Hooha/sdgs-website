import { Blogcard } from '@components/ui';

const blogPosts = [
  {
    title: 'Blog Post 1',
    date: '2020-01-01',
    content: 'This is the content of the first blog post',
    image: '',
    link: '',
    category: '',
  },
];

const Blog = (): JSX.Element => {
  return (
    <section
      aria-labelledby="events"
      className="p-0 md:pl-[50px] md:py-[50px] flex flex-col mdflex-row md:flex-wrap gap-[10px]"
    >
      <div className="w-full md:w-[300px] p-5">
        <h2 id="events" className="uppercase font-secondary text-[50px]">
          Recent <br />
          Blog
        </h2>
      </div>
      {blogPosts.map((post, index) => (
        <Blogcard key={index} />
      ))}
    </section>
  );
};

export default Blog;
