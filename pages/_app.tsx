import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ManageUiContext } from '@components/Context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManageUiContext>
      <Component {...pageProps} />
    </ManageUiContext>
  )
}

export default MyApp
