import { ChevronRight } from '@components/icons';
import { menuLinks } from '../data/linklist.data';
import { MenuListType, SubMenuType } from '../model/LinkListType';
import cx from 'clsx';
import styles from './../Navbar.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const LgNavbar = (): JSX.Element => {
  const midIndex = Math.round(menuLinks.length / 2);
  return (
    <div className="w-full flex items-center justify-center py-[10px]">
      <div className=" w-8/12 xl:w-6/12 flex flex-row items-center justify-between">
        {menuLinks.map((menuLink: MenuListType, index: number) => (
          <React.Fragment key={`${index}-div-a`}>
            <React.Fragment key={`${index}-div-b`}>
              {midIndex === index ? (
                <div className="w-[50px] h-[50px]" key={`${index}-img-div`}>
                  <Image
                    key={`${index}-img`}
                    src="/assets/images/fupre-sdsn.png"
                    alt="main-logo"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                ''
              )}
            </React.Fragment>
            <div
              className={cx(
                styles.dropdown,
                'dropdown inline-block py-[20px] relative'
              )}
              key={`${menuLink.id}---div`}
            >
              <button
                type="button"
                className="cursor-pointer flex flex-row"
                key={`${menuLink.id}--button`}
              >
                <span
                  className="mr-[4px] font-secondary font-bold uppercase text-[12px]"
                  key={`${menuLink.id}--span`}
                >
                  {menuLink.label}
                </span>
                <span
                  className="rotate-90 ease-in-out"
                  key={`${menuLink.id}---span-2`}
                >
                  <ChevronRight
                    className="h-[18px] w-[18px]"
                    key={`${menuLink.id}---chev`}
                  />
                </span>
              </button>
              {/*  -left-[100%] */}
              <div
                key={`${menuLink.id}--div-`}
                className={cx(
                  styles.dropdownMenu,
                  styles.bgTransparent,
                  { 'left-0': index === 0 },
                  { 'right-0': index === menuLinks.length - 1 },
                  {
                    '-left-[100%]':
                      index < midIndex &&
                      index !== menuLinks.length - 1 &&
                      index !== 0,
                  },
                  {
                    '-right-[100%]':
                      index >= midIndex &&
                      index !== menuLinks.length - 1 &&
                      index !== 0,
                  },
                  'h-[600px] w-[600px] bg-red-500 rounded-[10px] absolute hidden transition-all ease-in-out duration-100 z-[2] top-[50px] p-4'
                )}
              >
                <div className="w-4/12">
                  <ul className="flex flex-col">
                    {menuLink.subMenu.map((subLink: SubMenuType) => (
                      <li key={subLink.id}>
                        <Link href="/">
                          <a> {subLink.label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LgNavbar;
