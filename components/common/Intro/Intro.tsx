import { LottieSlider } from '@components/ui';
import Image from 'next/image';
const Intro = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="h-screen w-full md:w-6/12 bg-emerald-400 relative flex items-center px-[20px] md:px-[50px]">
        <div className="relative w-full">
          <h1 className="font-secondary font-bold text-8xl md:text-[202px] text-white m-0 p-0">
            SDGS
          </h1>
          <p className="font-secondary font-bold text-[50px] md:text-[80px]  text-white m-0 relative md:-top-[10px] z-10">
            FUPRE
          </p>
        </div>
        <div className="w-[100px] absolute -bottom-[100px] left-[50px]">
          <Image
            src="/assets/images/for-sdgs.jpeg"
            alt="main-logo"
            width={450}
            height={500}
            layout="fixed"
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="w-full md:w-6/12 grid place-items-center">
        <LottieSlider />
      </div>
    </div>
  );
};
export default Intro;
