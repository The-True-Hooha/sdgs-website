import { parseISO, format } from 'date-fns';
import cx from 'clsx';
type BlogDateT = {
  dateString: string;
  cssClasses?: string;
};
const BlogDate: React.FunctionComponent<BlogDateT> = ({
  dateString,
  cssClasses = '',
}): JSX.Element => {
  const dateS = parseISO(dateString);
  return (
    <time className={cx(cssClasses || '')} dateTime={dateString}>
      {format(dateS, 'LLLL	d, yyyy')}
    </time>
  );
};

export default BlogDate;
