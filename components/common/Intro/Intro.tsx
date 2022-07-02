import Image from 'next/image';
const Intro = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="h-screen w-6/12 bg-emerald-400 relative">
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
