import { Accordion } from '@components/ui';
import Image from 'next/image';
import Link from 'next/link';
import { menuLinks } from '../Navbar/data/linklist.data';
import { MenuListType, SubMenuType } from '../Navbar/model/LinkListType';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  return (
    <footer
      aria-labelledby="footer"
      className="bg-emerald-400 px-2 lg:md:px-[50px]"
    >
      <div className="w-full py-6">
        <div className="w-full flex flex-col gap-5 lg:flex-row">
          <div className="w-full lg:w-1/2 flex items-center gap-3">
            <div className="w-[64px] h-[64px] overflow-hidden">
              <Image
                src="/assets/images/fupre-sdsn.png"
                alt="main-logo"
                height={64}
                width={64}
                layout="fixed"
                className="object-fill object-center"
                priority={true}
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
          <div className="w-full  lg:w-1/2">
            <p className="font-primary text-md text-white mb-2">
              Sign up for our newsletter
            </p>
            <div className="w-full border border-solid border-white flex items-center p-2 rounded-[30px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="bg-transparent placeholder-white text-white text-lg w-full p-2 outline-none rounded-lg"
              />
              <button
                type="button"
                className="uppercase bg-white p-2 text-emerald-400 text-sm rounded-[115px] font-secondary font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="py-5">
            {menuLinks.map((menuLink: MenuListType, index: number) => (
              <Accordion
                buttonText={menuLink.label}
                key={index}
                buttonClasses="font-secondary font-bold text-white"
                iconClasses="text-white"
                childernDivRefClasses="!border-white"
              >
                <ul className="py-4 px-2" key={`${menuLink.id}-id-ul`}>
                  {menuLink.subMenu.map((subm: SubMenuType) => (
                    <li
                      key={subm.id}
                      className="py-2 px-3 font-secondary text-white"
                    >
                      <Link href={subm.url}>{subm.label}</Link>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>
          <div className='flex items-center gap-[10px]'>
            <FiFacebook className="text-white h-[24px] w-[24px]" />
            <FiTwitter className="text-white h-[24px] w-[24px]" />
            <FiLinkedin className="text-white h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
