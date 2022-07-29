import Layout from '@components/common/layout';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <Layout
      cssClasses="grid place-items-center min-h-[500px] h-[80vh]"
      useHero={false}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-secondary text-2xl text-center">
          <span className="font-bold">404 </span>| Page Not Found
        </h1>
        <Link href="/">
          <a className="font-secondary text-md p-2 block bg-red-400 hover:bg-red-600 rounded-lg text-white">
            Go back home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
