import { ChevronRight } from '@components/icons';
import Image from 'next/image';
const Blogcard = (): JSX.Element => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <Image
          src="/assets/images/mama-plantain.jpeg"
          alt="main-logo"
          width={300}
          height={200}
          layout="responsive"
          className="w-full object-cover object-center"
          priority={true}
        />
      </div>
      <div className="w-full px-5 py-[50px]">
        <h3 className="font-secondary font-bold text-md uppercase">Stories</h3>
        <div className="w-full">
          <h4 className="font-secondary text-xl uppercase my-[20px]">
            Young people call for concerted action on climate, sustainable
            development and peace
          </h4>
          <p className="">
            Youth gathered online for the Generation17 Dialogue, titled
            ‘Amplifying the voices, stories and ingenuity of young leaders
            helping achieve the Global Goals.
          </p>
          <button
            type="button"
            className="flex items-center mt-5 hover:font-bold"
          >
            <span className="uppercase font-secondary">Read more</span>
            <ChevronRight className="h-[24px] w-[24px] text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
