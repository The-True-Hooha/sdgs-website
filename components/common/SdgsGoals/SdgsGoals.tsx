import Image from 'next/image';
import { sdgsGoals, SdgsGoalsDataType } from './goals.data';
import cx from 'clsx';
const SdgsGoals = (): JSX.Element => {
  return (
    <section
      aria-labelledby="sdgs-gols"
      className="p-0 md:px-[50px] md:py-[50px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1"
    >
      <div className="h-[500px] flex items-center justify-center">
        <div className="w-8/12">
          <Image
            src="/assets/goals-bg-images/global-goals.png"
            alt="global goals"
            width={150}
            height={150}
            layout="responsive"
            className="object-contain object-center"
            priority={true}
          />
        </div>
      </div>
      {sdgsGoals.map((v: SdgsGoalsDataType, idx: number) => (
        <div
          key={idx}
          className="overflow-hidden relative h-[500px] cursor-pointer"
        >
          <Image
            src={v.bgImg}
            alt={v.goalDescription}
            width={300}
            height={500}
            layout="fixed"
            className={cx(v.bgImgClasses || '', 'object-cover')}
          />
          <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] z-1 bottom-3 left-3">
            <Image
              src={v.goalImg}
              alt={`goal-${idx + 1}`}
              width={150}
              height={150}
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute top-0 w-full h-[500px] z-[2] flex flex-col justify-center p-2 opacity-0 hover:opacity-100 bg-gray-200/40 backdrop-blur">
            <h3 className="font-secondary font-bold text-sm uppercase mb-2 text-white">
              Goal {v.id}
            </h3>
            <p className="font-primary text-md text-white text-justify">
              {v.goalDescription}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SdgsGoals;
