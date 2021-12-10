// import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react'; //nprogress module
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
