import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css';
import { Layout } from '@/components/Layout/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Stability</title>
        <meta name="description" content="Stablity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
