import GlobalStyle from '../styles/globals'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="title" content="MKS Sistemas" />
        <meta name="description" content="Desafio frontend proposto pela empresa MKS Desenvolvimento de Sistemas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
