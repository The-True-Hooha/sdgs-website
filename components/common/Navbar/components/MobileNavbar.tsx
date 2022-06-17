import Image from 'next/image';
import styles from './../Navbar.module.css';
import { useUIContext } from '@components/ui/Context';
import { menuLinks } from '../data/linklist.data';
import { LinkType, MenuListType, SubMenuType } from '../model/LinkListType';
import { ArrowLeft, ChevronRight } from '@components/icons';
import cx from 'clsx';
import { useState } from 'react';

const MobileNavbar = () => {
  const { toggleSidebar, displaySidebar } = useUIContext();
  const [closeMainMenu, setCloseMainMenuState] = useState<boolean>(true);
  const [closeSubMainMenu, setCloseSubMainMenuState] = useState<boolean>(false);
  const [subMenuDataIdx, setSubMenuDataIdx] = useState<number>(-1);
  const openSubMenu = (idx: number) => {
    setCloseMainMenuState(false);
    setCloseSubMainMenuState(true);
    setSubMenuDataIdx(idx);
  };
  const closeSubMenu = () => {
    setCloseMainMenuState(true);
    setCloseSubMainMenuState(false);
    setSubMenuDataIdx(-1);
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
              {menuLinks.map((menuLink: MenuListType, index: number) => (
                <div
                  className="w-full flex flex-row items-center py-[8px]"
                  key={menuLink.id}
                  onClick={() => openSubMenu(index)}
                >
                  <span className="mr-[4px] font-secondary font-bold uppercase">
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
              <button
                className="border-0 flex flex-row items-center cursor-pointer"
                onClick={closeSubMenu}
              >
                <ArrowLeft />
                <span className="font-primary text-base ml-[8px]">Back</span>
              </button>
              <>
                {menuLinks[subMenuDataIdx] && (
                  <div className="w-full">
                    <h2 className="uppercase font-bold my-[24px]">
                      {menuLinks[subMenuDataIdx]?.label}
                    </h2>
                    <div>
                      {menuLinks[subMenuDataIdx]?.subMenu.map(
                        (subMenu: SubMenuType) => (
                          <div className="w-full py-[8px]" key={subMenu.id}>
                            <h2 className="font-bold">{subMenu.label}</h2>
                            <ul className="pl-[16px]">
                              {subMenu.links.map((link: LinkType) => (
                                <li key={link.id} className="py-[8px]">
                                  {link.label}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default MobileNavbar;
