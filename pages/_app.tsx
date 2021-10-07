import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/global.scss';
import { Header } from '../components/layout/Header';
import { theme } from '../styles/lightTheme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
