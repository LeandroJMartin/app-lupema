import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutApp from '../components/interface/Layout';
import MenuContextProvider from '../context/menuMobileContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </MenuContextProvider>
  );
}

export default MyApp;
