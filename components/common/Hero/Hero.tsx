import Image from 'next/image';
import React from 'react';
type HeroType = {
  label?: string;
  bgImgUrl?: string;
  overlayBgCss?: string;
};

const Hero: React.FunctionComponent<HeroType> = ({
  label = 'Page label',
  bgImgUrl = '/assets/images/for-sdgs.jpeg',
}): JSX.Element => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-[50vh] relative overflow-hidden flex items-center">
        <div className="w-full h-full bg-black/30 absolute z-10"></div>
        <div className="absolute z-20 p-[50px] flex flex-col gap-[30px]">
          <p className="text-white font-secondary text-2xl">SDGS FUPRE</p>
          <h2 className="text-white font-secondary font-bold uppercase text-5xl">
            {label}
          </h2>
        </div>
        <Image
          src={bgImgUrl}
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
