import { parseISO, format } from 'date-fns';
import { ChevronRight } from '@components/icons';
import Image from 'next/image';

type BlogPreviewCardType = {
  title: string;
  coverImage: string;
  date: string;
  author?: string;
  slug: string;
  excerpt: string;
  categories: Array<{
    id: string;
    name: string;
  }>;
};
const BlogPreviewCard: React.FunctionComponent<BlogPreviewCardType> = ({
  title,
  coverImage,
  date,
  author,
  slug,
  excerpt,
  categories,
}): JSX.Element => {
  const dateString = parseISO(date);
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={slug}
            width={300}
            height={200}
            layout="responsive"
            className="w-full object-cover object-center"
            priority={true}
          />
        ) : (
          <div className="w-full h-[200px] bg-gray-300 grid place-items-center">
            <p className="font-secondary text-sm">No Preview image</p>
          </div>
        )}
      </div>
      <div className="w-full px-5 py-5">
        <h3 className="font-secondary text-sm mb-2">
          <time dateTime={date}>{format(dateString, 'LLLL	d, yyyy')}</time>
        </h3>
        <div className="font-secondary font-bold text-md uppercase flex flex-wrap gap-[10px]">
          {categories.map((v: { id: string; name: string }) => (
            <span key={v.id}>{v.name}</span>
          ))}
        </div>
        <div className="w-full">
          <h4
            className="font-secondary text-xl uppercase my-[20px]"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h4>
          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          <button
            type="button"
            className="flex items-center mt-5 hover:font-bold"
          >
            <span className="uppercase font-secondary">Read more</span>
            <ChevronRight className="h-[24px] w-[24px] text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
