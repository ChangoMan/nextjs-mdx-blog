import React, { FC } from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
