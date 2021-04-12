import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import SEO from '../../next-seo.config';

import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#ed1844" />
        <meta
          name="google-site-verification"
          content="h9cCuvd_bv4ijHfZvBYZtJ3aMvQI2JjSYFiRyizU2qM"
        />
      </Head>

      <DefaultSeo {...SEO} />

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
