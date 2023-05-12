import React, { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutApp from '../components/interface/Layout';
import MenuContextProvider from '../context/menuMobileContext';
import { QueryClientProvider, QueryClient } from 'react-query';
import TagManager from 'react-gtm-module';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const TagManagerArgs = {
      gtmId: 'GTM-NJTPCVC',
    };

    TagManager.initialize(TagManagerArgs);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MenuContextProvider>
        <LayoutApp ApiData={pageProps}>
          <Component {...pageProps} />
        </LayoutApp>
      </MenuContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
