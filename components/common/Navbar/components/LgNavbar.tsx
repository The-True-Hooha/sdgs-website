import { ChevronRight } from '@components/icons';
import { menuLinks } from '../data/linklist.data';
import { MenuListType } from '../model/LinkListType';
import cx from 'clsx';
import styles from './../Navbar.module.css';
import Image from 'next/image';
import React from 'react';

const LgNavbar = (): JSX.Element => {
  const showLogo = Math.round(menuLinks.length / 2);
  return (
    <div className="w-full">
      <div>
        <div className="flex flex-row items-center justify-between px-[100px]">
          {menuLinks.map((menuLink: MenuListType, index: number) => (
            <React.Fragment key={`${index}-div-a`}>
              <React.Fragment key={`${index}-div-b`}>
                {showLogo === index ? (
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
                <div
                  key={`${menuLink.id}--div-`}
                  className={cx(
                    styles.dropdownMenu,
                    'h-[100px] w-[100px] bg-red-500 rounded-[10px] absolute hidden transition-all ease-in-out duration-100'
                  )}
                ></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LgNavbar;
