import React, { ReactNode } from 'react';
import cx from 'clsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
type Layout = {
  children?: ReactNode;
  cssClasses?: string;
};
const Layout: React.FunctionComponent<Layout> = ({
  children,
  cssClasses = '',
}): JSX.Element => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <header className="w-full">
        <Navbar />
      </header>
      <main className={cx(cssClasses)}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
