import React, { ReactNode } from 'react';
import cx from 'clsx';
type Layout = {
  children: ReactNode;
  cssClasses: string;
};
const Layout: React.FunctionComponent<Layout> = ({
  children,
  cssClasses = '',
}): JSX.Element => {
  return <div className={cx('px-[50px]', cssClasses)}>{children}</div>;
};

export default Layout;
