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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
