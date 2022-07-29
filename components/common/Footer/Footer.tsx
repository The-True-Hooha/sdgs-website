import { Accordion } from '@components/ui';
import Image from 'next/image';
import Link from 'next/link';
import { menuLinks } from '../Navbar/data/linklist.data';
import { MenuListType, SubMenuType } from '../Navbar/model/LinkListType';
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  return (
    <footer
      aria-labelledby="footer"
      className="bg-emerald-400 px-2 lg:md:px-[50px]"
    >
      <div className="w-full py-6">
        <div className="w-full flex flex-col gap-5 lg:flex-row lg:py-[50px] items-center">
          <div className="w-full lg:w-1/2 flex items-center gap-3">
            <div className="w-[64px] h-[64px] overflow-hidden">
              <Image
                src="/assets/images/fupre-sdsn.png"
                alt="main-logo"
                height={64}
                width={64}
                layout="fixed"
                className="object-fill object-center"
              />
            </div>
            <div className="">
              <h1 className="font-secondary font-bold text-lg text-white">
                SDGS
              </h1>
              <p className="font-secondary font-bold text-lg  text-white">
                FUPRE
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:flex lg:flex-col lg:items-end">
            <p className="font-secondary font-semibold text-[12px] text-white mb-2">
              Sign up for our newsletter
            </p>
            <div className="w-full border border-solid border-white flex items-center p-1 rounded-[30px] lg:max-w-[500px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="font-primary font-normal bg-transparent placeholder-white text-white text-sm w-full p-2 outline-none rounded-lg"
              />
              <button
                type="button"
                className="uppercase bg-white p-3 text-emerald-400 hover:bg-gray-100 text-sm rounded-[115px] font-secondary font-bold transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full py-5 lg:hidden">
            {menuLinks.map((menuLink: MenuListType, index: number) => (
              <Accordion
                buttonText={menuLink.label}
                key={index}
                buttonClasses="font-secondary font-bold text-white lg:px-0"
                iconClasses="text-white"
                childernDivRefClasses="!border-white"
                parentDivRefClasses="!border-white"
              >
                <ul className="py-4 px-2 lg:px-0" key={`${menuLink.id}-id-ul`}>
                  {menuLink.subMenu.map((subm: SubMenuType) => (
                    <li
                      key={subm.id}
                      className="py-2 px-3 md:px-0 font-secondary text-white lg:font-primary"
                    >
                      <Link href={subm.url}>{subm.label}</Link>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>
          <div className="flex items-center gap-[10px]">
            <FiFacebook className="text-white h-[24px] w-[24px]" />
            <FiTwitter className="text-white h-[24px] w-[24px]" />
            <FiLinkedin className="text-white h-[24px] w-[24px]" />
            <FiYoutube className="text-white h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
