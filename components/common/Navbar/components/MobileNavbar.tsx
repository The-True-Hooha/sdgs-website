import Image from 'next/image';
import styles from './../Navbar.module.css';
import { useUIContext } from '@components/ui/Context';
import { menuLinks } from '../data/linklist.data';
import { LinkType, MenuListType, SubMenuType } from '../model/LinkListType';
import { ArrowLeft, ChevronRight } from '@components/icons';
import cx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';

const MobileNavbar: React.FunctionComponent<{
  navBg?: string;
}> = ({ navBg = '' }) => {
  const { toggleSidebar, displaySidebar } = useUIContext();
  const [openMainMenu, setOpenMainMenuState] = useState<boolean>(true);
  const [openSubMainMenu, setOpenSubMainMenuState] = useState<boolean>(false);
  const [subMenuDataIdx, setSubMenuDataIdx] = useState<number>(-1);

  const openSubMenu = (idx: number) => {
    setOpenMainMenuState(false);
    setOpenSubMainMenuState(true);
    setSubMenuDataIdx(idx);
  };
  const closeSubMenu = () => {
    setOpenMainMenuState(true);
    setOpenSubMainMenuState(false);
    setSubMenuDataIdx(-1);
  };
  const toggleMenuBtn = () => {
    if (openSubMainMenu) {
      closeSubMenu();
    }
    toggleSidebar();
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0">
      <nav
        className={cx(
          'flex flex-row items-center justify-between h-auto py-[5px] px-[10px] w-full z-[999]',
          navBg
        )}
      >
        <div className={cx(styles.navBarContainer, '')} onClick={toggleMenuBtn}>
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
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <Link href="/">
            <a>
              <Image
                src="/assets/images/fupre-sdsn.png"
                alt="main-logo"
                height={50}
                width={50}
                layout="fixed"
                priority={true}
              />
            </a>
          </Link>
        </div>
        <div></div>
      </nav>
      <div
        className={cx(
          'h-screen bg-transparent px-[10px] pt-[50px]',
          styles.bgTransparent,
          {
            hidden: !displaySidebar,
          }
        )}
      >
        <>
          {openMainMenu && (
            <div className="w-full">
              {menuLinks.map((menuLink: MenuListType, index: number) => (
                <div
                  className="w-full flex flex-row items-center py-[20px]"
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
          {openSubMainMenu && (
            <div className="w-full">
              <button
                type="button"
                className="border-0 flex flex-row items-center cursor-pointer"
                onClick={closeSubMenu}
              >
                <ArrowLeft color="text-red-400" />
                <span className="font-secondary font-semibold text-base m-0 ml-[8px]">
                  Back
                </span>
              </button>
              <>
                {menuLinks[subMenuDataIdx] && (
                  <div className="w-full">
                    <div className="w-full relative overflow-hidden flex items-center">
                      <div className="absolute left-[20px] w-[200px] h-[40px] bg-red-400"></div>
                      <h2 className="uppercase font-bold my-[24px] font-secondary relative z-1">
                        {menuLinks[subMenuDataIdx]?.label}
                      </h2>
                    </div>
                    <div>
                      {menuLinks[subMenuDataIdx]?.subMenu.map(
                        (subMenu: SubMenuType) => (
                          <div className="w-full py-[8px]" key={subMenu.id}>
                            <h2 className="font-secondary font-bold text-sm flex items-center">
                              <span className="align-middle">
                                {subMenu.label}
                              </span>
                              {subMenu.links.length < 1 && (
                                <ChevronRight className="h-[24px] w-[24px] text-red-400" />
                              )}
                            </h2>
                            <ul className="pl-[16px]">
                              {subMenu.links.map((link: LinkType) => (
                                <li
                                  key={link.id}
                                  className="py-[8px] font-primary flex items-center"
                                >
                                  <Link href={link.url} className="w-full">
                                    <a className="flex items-center">
                                      <span> {link.label}</span>
                                      <ChevronRight className="h-[24px] w-[24px] text-red-400" />
                                    </a>
                                  </Link>
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
