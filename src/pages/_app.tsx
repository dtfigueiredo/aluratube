import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globals'
import { RecoilRoot } from 'recoil'

import { DARK } from '../styles/dark'
import { LIGHT } from '../styles/light'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={LIGHT}>
      <GlobalStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
}
