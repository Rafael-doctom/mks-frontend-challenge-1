import GlobalStyle from '../styles/globals'
import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  )
}

export default MyApp
