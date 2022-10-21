import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html>
            <Head>
                <title>MKS Sistemas</title>
                <meta name="title" content="MKS Sistemas" />
                <meta name="description" content="Desafio frontend proposto pela empresa MKS Desenvolvimento de Sistemas" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}