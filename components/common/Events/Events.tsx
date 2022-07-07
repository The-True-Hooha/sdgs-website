const events = [
  {
    title: 'Event 1',
    date: '2022-06-01',
    time: '9am',
    venue: 'L.T.1 Fupre',
  },
];

const Events = () => {
  return (
    <section aria-labelledby="events" className="pl-[50px] py-[100px]">
      <h2 id="events" className="uppercase font-secondary text-[50px]">
        Events
      </h2>
      <div className="">
        <div className="w-[300px] h-auto border border-solid border-gray-100 p-5 rounded-md">
          <h3 className="font-secondary font-bold text-xl">05</h3>
          <h3 className="font-secondary text-sm">July, 2022</h3>
          <div className="w-[30px] h-[1px] mt-[2px] mb-[20px] bg-gray-100"></div>
          <p className="font-primary text-base">
            A Talk on Water life: SDGS 2022
          </p>
          <p className="text-[8px] font-secondary mt-[10px]">L.T.1 - Fupre</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
