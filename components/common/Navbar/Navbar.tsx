import LgNavbar from './components/LgNavbar';
import MobileNavbar from './components/MobileNavbar';
import { useDebounce } from 'usehooks-ts';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activateNavBg, setActivateNavBg] = useState<string>(false);
  const debouncedValue = useDebounce<string>(activateNavBg, 500);
  const scrollHandler = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setActivateNavBg('bg-[rgba(255, 255, 255, 0.46)] backdrop-blur-[2.1px]');
    } else {
      setActivateNavBg('');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <div className="w-full fixed top-0 z-[999]">
      <div className="w-full lg:hidden">
        <MobileNavbar navBg={debouncedValue} />
      </div>
      <div className="w-full hidden lg:block">
        <LgNavbar navBg={debouncedValue} />
      </div>
    </div>
  );
};

export default Navbar;
