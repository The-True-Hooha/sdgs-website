import Layout from '@components/common/layout';

const leadershipData = [
  {
    id: 1,
    name: 'Dr. Elias Emeka Elemike',
    image: '/images/leadership/dr-elemike.jpg',
  },
];
export default function Leadership() {
  return (
    <Layout
      // cssClasses="grid place-items-center min-h-[500px] h-[80vh]"
      useHero={false}
    >
      <div className="">
        <div className=''>
        <p>HOME / OUR LEADERSHIP</p>
      {/* <div className="flex flex-col items-center justify-center">
        <h1 className="font-secondary text-2xl text-center">
         Leader ship
        </h1>
      </div> */}
      </div>
      </div>
    </Layout>
  );
}
