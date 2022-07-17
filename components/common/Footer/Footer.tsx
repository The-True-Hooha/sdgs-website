import Image from 'next/image';
const Footer = (): JSX.Element => {
  return (
    <footer aria-labelledby="footer" className="bg-emerald-400 px-2">
      <div className="w-full py-6">
        <div className="w-full flex flex-col gap-5">
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
          <div className="w-full">
            <p className="font-primary text-lg text-white mb-2">
              Sign up for our newsletter
            </p>
            <div className="w-full border border-solid border-white flex items-center p-2 rounded-xl">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="bg-transparent placeholder-white text-white text-lg w-full p-3 outline-none rounded-lg"
              />
              <button
                type="button"
                className="uppercase bg-white p-3 rounded-xl text-emerald-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
