import Image from 'next/image';
import { sdgsGoals, SdgsGoalsDataType } from './goals.data';

const SdgsGoals = (): JSX.Element => {
  return (
    <section
      aria-labelledby="sdgs-gols"
      className="p-0 md:px-[50px] md:py-[50px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1"
    >
      <div className="w-full md:w-[300px] p-5">
        <h2 id="sdgs-gols" className="uppercase font-secondary text-[50px]">
          Sdgs goals
        </h2>
      </div>
      {sdgsGoals.map((v: SdgsGoalsDataType, idx: number) => (
        <div key={idx} className="overflow-hidden relative h-[500px]">
          <Image
            src={v.bgImg}
            alt={v.goalDescription}
            width={300}
            height={500}
            layout="fixed"
            className="w-full object-cover object-center"
            priority={true}
          />
          <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] z-10 bottom-3 left-3">
            <Image
              src={v.goalImg}
              alt={v.goalDescription}
              width={150}
              height={150}
              layout="responsive"
              className="object-cover object-center"
              priority={true}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default SdgsGoals;
