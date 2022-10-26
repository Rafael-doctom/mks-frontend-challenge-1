import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

// styles
import GlobalStyle from '../styles/globals'

// utilities
import { persistor, store } from '../store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
      <GlobalStyle />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
