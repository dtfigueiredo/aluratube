import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globals'

import { THEME } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
