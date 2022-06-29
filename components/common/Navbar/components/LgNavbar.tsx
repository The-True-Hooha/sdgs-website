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
                  'overflow-hidden h-[500px] w-[800px] bg-red-500 rounded-[10px] absolute hidden transition-all ease-in-out duration-100 z-[2] top-[50px] flex-row'
                )}
              >
                <div className="w-3/12 flex pt-[50px] px-[10px]">
                  <ul>
                    {menuLink.subMenu.map((subLink: SubMenuType) => (
                      <li
                        key={subLink.id}
                        className="font-secondary font-semibold text-[10px] border-b border-solid border-gray-100"
                      >
                        <Link href="/">
                          <a className="block px-[10px] py-[15px] hover:bg-red-400">
                            {' '}
                            {subLink.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-6/12 pt-[50px] px-[20px] bg-gray-100">
                  <h2 className="font-secondary font-bold uppercase">
                    Lorem header
                  </h2>
                  <p className="font-primary text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic magnam, unde dolores doloremque distinctio maiores sunt
                    earum in corporis aperiam vero odio veritatis. Dolor
                    similique earum natus doloremque unde cum.
                  </p>
                </div>
                <div className="w-3/12 bg-red-300">
                  <Image
                    key={`${index}-img`}
                    src={menuLink.imgUrl}
                    alt="main-logo"
                    width={300}
                    height={500}
                    layout="fixed"
                    className="object-cover object-center"
                    priority={true}
                  />
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
