import { RecoilRoot } from 'recoil'

import { GlobalStyle } from '../styles/globals'

import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
