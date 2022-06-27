import { ChevronRight } from '@components/icons';
import { menuLinks } from '../data/linklist.data';
import { MenuListType } from '../model/LinkListType';
import cx from 'clsx';
import styles from './../Navbar.module.css';

const LgNavbar = (): JSX.Element => {
  return (
    <div className="w-full">
      <div>
        <div className="flex flex-row justify-between px-[100px]">
          {menuLinks.map((menuLink: MenuListType, index: number) => (
            <div
              className={cx(
                styles.dropdown,
                'dropdown inline-block py-[20px] relative'
              )}
              key={menuLink.id}
            >
              <button
                type="button"
                className="cursor-pointer flex flex-row bg-gray-300"
              >
                <span className="mr-[4px] font-secondary font-bold uppercase text-[12px]">
                  {menuLink.label}
                </span>
                <span className="rotate-90">
                  <ChevronRight className="h-[18px] w-[18px]" />
                </span>
              </button>
              <div
                className={cx(
                  styles.dropdownMenu,
                  'h-[100px] w-[100px] bg-red-500 rounded-[10px] absolute hidden transition-all easy-in-out'
                )}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LgNavbar;
