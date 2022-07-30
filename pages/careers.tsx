import Layout from '@components/common/layout';

export default function Career() {
  return (
    <Layout
      cssClasses="grid place-items-center min-h-[500px] h-[80vh]"
      useHero={false}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-secondary text-2xl text-center">
          No opening for now. please check back later
        </h1>
      </div>
    </Layout>
  );
}
