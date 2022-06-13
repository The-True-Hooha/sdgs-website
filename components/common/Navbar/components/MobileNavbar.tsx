import Image from 'next/image';
import styles from './../Navbar.module.css';
import { useUIContext } from '@components/ui/Context';
// import className from 'classnames'
import classNames from 'classnames/bind';
import { menuLinks } from '../data/linklist.data';
import { MenuListType } from '../model/LinkListType';
let cx = classNames.bind(styles);

const MobileNavbar = () => {
  const { toggleSidebar, displaySidebar } = useUIContext();
  return (
    <div className="w-full fixed top-0 left-0 right-0">
      <nav className="flex flex-row items-center justify-between h-auto py-[5px] px-[10px] w-full bg-red-500 z-[999]">
        <div className={cx('navBarContainer', '')} onClick={toggleSidebar}>
          <div
            className={cx('bar1', {
              '-rotate-45 translate-x-[0px] translate-y-[10px]': displaySidebar,
            })}
          ></div>
          <div className={cx('bar2', { 'opacity-0': displaySidebar })}></div>
          <div
            className={cx('bar3', {
              'rotate-45 translate-x-[0px] translate-y-[-11px]': displaySidebar,
            })}
          ></div>
        </div>
        <Image
          src="/assets/images/fupre-sdsn.png"
          alt="main-logo"
          height={32}
          width={32}
        />
        <div></div>
      </nav>
      <div className={cx('h-screen bg-gray-600', { hidden: !displaySidebar })}>
        {menuLinks.map((menuLink: MenuListType) => (
          <div className="w-full h-full" key={menuLink.id}>
            {menuLink.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
