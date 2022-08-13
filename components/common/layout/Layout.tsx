import React, { ReactNode } from 'react';
import cx from 'clsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { LoadingDots } from '@components/ui';
import dynamic from 'next/dynamic';
import { HeroType } from '../Hero/Hero';

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
);
const dynamicProps = {
  loading: Loading,
};
const HeroView = dynamic(() => import('../Hero'), {
  ...dynamicProps,
});

type Layout = {
  children?: ReactNode;
  cssClasses?: string;
  useHero?: boolean;
  cleanMainCss?: boolean;
  heroDetails?: HeroType;
};

const Layout: React.FunctionComponent<Layout> = ({
  children,
  cssClasses = '',
  useHero = true,
  cleanMainCss = false,
  heroDetails = {},
}): JSX.Element => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <header className="w-full">
        <Navbar />
      </header>
      {useHero && <HeroView {...heroDetails} />}
      <main
        className={cx(cssClasses, {
          'w-full min-h-[70vh] pt-[70px]': !cleanMainCss,
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
