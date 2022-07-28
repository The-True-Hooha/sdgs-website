import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ManageUiContext } from '@components/ui/Context'
import { Head } from '@components/common';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <ManageUiContext>
        <Component {...pageProps} />
      </ManageUiContext>
    </>
  );
}

export default MyApp
