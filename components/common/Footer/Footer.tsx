import Image from 'next/image';
const Footer = (): JSX.Element => {
  return (
    <footer aria-labelledby="footer" className="bg-emerald-400 px-2">
      <div className="w-full py-6">
        <div className="w-full flex items-center gap-3">
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
      </div>
    </footer>
  );
};

export default Footer;
