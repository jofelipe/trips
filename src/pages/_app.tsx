import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

import { AppProps } from 'next/app';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trips - Jonathan Felipe</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ed1844" />
        <meta
          name="description"
          content="Um projeto simples para mostrar minhas viagens favoritas pelo mundo."
        />
      </Head>
      <GlobalStyles />
      <NextNprogress
        color="#ed1844"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{
          showSpinner: false
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
