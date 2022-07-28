import { LottieSlider } from '@components/ui';
import Image from 'next/image';
const Hero = (): JSX.Element => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-screen relative overflow-hidden flex items-center">
        <div className="w-full h-full bg-black/30 absolute z-10"></div>
        <div className='absolute z-20'>
          <p>SDGS FUPRE</p>
          <h2 className="text-white font-secondary font-bold uppercase text-4xl">Contact Us</h2>
        </div>
        <Image
          src="/assets/images/for-sdgs.jpeg"
          alt="main-logo"
          className="object-cover object-center"
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};
export default Hero;
