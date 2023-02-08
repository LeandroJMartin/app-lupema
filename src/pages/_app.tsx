import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutApp from '../components/interface/Layout';
import { ApiData } from '../types/apidata';

function MyApp({ Component, pageProps }: AppProps<ApiData>) {
  return (
    <LayoutApp>
      <Component {...pageProps} />
    </LayoutApp>
  );
}

export default MyApp;
