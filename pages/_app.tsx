import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import '../styles/global.scss';
import { Header } from '../components/layout/Header';
import { theme } from '../styles/lightTheme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Мёд из села Кадымка</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
