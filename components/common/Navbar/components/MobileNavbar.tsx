import Image from 'next/image';
import styles from './../Navbar.module.css';
import { useUIContext } from '@components/ui/Context';
import { menuLinks } from '../data/linklist.data';
import { MenuListType } from '../model/LinkListType';
import { ArrowLeft, ChevronRight } from '@components/icons';
import cx from 'clsx';
import { useState } from 'react';

const MobileNavbar = () => {
  const { toggleSidebar, displaySidebar } = useUIContext();
  const [closeMainMenu, setCloseMainMenuState] = useState<boolean>(true);
  const [closeSubMainMenu, setCloseSubMainMenuState] = useState<boolean>(false);
  const openSubMenu = () => {
    setCloseMainMenuState(false);
    setCloseSubMainMenuState(true);
  };
  const closeSubMenu = () => {
    setCloseMainMenuState(true);
    setCloseSubMainMenuState(false);
  };
  return (
    <div className="w-full fixed top-0 left-0 right-0">
      <nav className="flex flex-row items-center justify-between h-auto py-[5px] px-[10px] w-full z-[999]">
        <div className={cx(styles.navBarContainer, '')} onClick={toggleSidebar}>
          <div
            className={cx(styles.bar1, {
              '-rotate-45 translate-x-[0px] translate-y-[10px]': displaySidebar,
            })}
          ></div>
          <div
            className={cx(styles.bar2, { 'opacity-0': displaySidebar })}
          ></div>
          <div
            className={cx(styles.bar3, {
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
      <div
        className={cx('h-screen bg-transparent px-[10px] pt-[50px]', {
          hidden: displaySidebar,
        })}
      >
        <>
          {closeMainMenu && (
            <div className="w-full">
              {menuLinks.map((menuLink: MenuListType) => (
                <div
                  className="w-full flex flex-row items-center py-[8px]"
                  key={menuLink.id}
                  onClick={openSubMenu}
                >
                  <span className="mr-[4px] font-secondary font-bold uppercase">
                    {' '}
                    {menuLink.label}
                  </span>
                  <span>
                    <ChevronRight className="h-[24px] w-[24px]" />
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
        <>
          {closeSubMainMenu && (
            <div className="w-full">
              <div>
                <button className="border-0" onClick={closeSubMenu}>
                  <ArrowLeft />
                </button>
              </div>
              submenu
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default MobileNavbar;
