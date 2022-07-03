import Image from 'next/image';
const Intro = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="h-screen w-6/12 bg-emerald-400 relative flex  items-center px-[50px]">
        <div className="relative">
          <h1 className="font-secondary font-bold text-[202px] text-white m-0 p-0">
            SDGS
          </h1>
          <p className="font-secondary font-bold text-[50px] text-white m-0 relative -top-[50px]">
            FUPRE
          </p>
        </div>
        <div className="w-[100px] absolute -bottom-[100px] left-[50px]">
          <Image
            src="/assets/images/for-sdgs.jpeg"
            alt="main-logo"
            width={250}
            height={300}
            layout="fixed"
            className="object-cover object-center"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Intro;
