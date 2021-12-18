// import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { ThemeContext, theme as themeStore, Theme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import { Nav } from '../components/nav';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
