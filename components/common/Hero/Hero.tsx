import Image from 'next/image';
import React, { ReactNode } from 'react';
import cx from 'clsx';
export type HeroType = {
  title?: string;
  removeHeroTitle?: boolean;
  label?: string;
  bgImgUrl?: string;
  overlayBgCss?: string;
  cssClasses?: string;
  cleanMainCss?: boolean;
  addBelowLabel?: ReactNode;
};

const Hero: React.FunctionComponent<HeroType> = ({
  title = 'SDGS FUPRE',
  removeHeroTitle = false,
  label = 'Page label',
  bgImgUrl = '',
  cssClasses = '',
  cleanMainCss = false,
  addBelowLabel,
}): JSX.Element => {
  return (
    <div
      className={cx(cssClasses, {
        'w-full h-auto pt-[70px]': !cleanMainCss,
      })}
    >
      <div className="w-full min-h-[300px] h-[50vh] relative overflow-hidden flex items-center">
        <div className="w-full h-full bg-black/30 absolute z-[1]"></div>
        <div className="absolute z-[2] p-[25px] md:p-[50px] flex flex-col gap-[30px]">
          {!removeHeroTitle && (
            <p className="text-white font-secondary text-2xl">{title}</p>
          )}

          <h2 className="text-white font-secondary font-bold uppercase text-5xl break-words">
            {label}
          </h2>
          {addBelowLabel && <>{addBelowLabel}</>}
        </div>
        <Image
          src={bgImgUrl || '/assets/images/for-sdgs.jpeg'}
          alt="main-logo"
          className="object-cover object-top"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};
export default Hero;
