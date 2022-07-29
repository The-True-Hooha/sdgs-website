import Layout from '@components/common/layout';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <Layout
      cssClasses="grid place-items-center min-h-[500px] h-[80vh]"
      useHero={false}
    >
      <div className="flex flex-col items-center">
        <h1 className="font-secondary text-2xl">
          <span className="font-bold">500 </span>| Server-side error occurred
        </h1>
        <Link href="mailto:ereyomioluwaseyi@gmail.com">
          <a className="font-secondary text-md p-2 block bg-red-400 hover:bg-red-600 rounded-lg text-white">
            Contact our Admin about this
          </a>
        </Link>
      </div>
    </Layout>
  );
}
