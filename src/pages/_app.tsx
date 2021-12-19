// import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeContext, Theme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useState } from 'react';
import { Nav } from '../page-components/shared/components/Nav';
import CustomHead from '../page-components/app/components/CustomHead';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CustomHead theme={theme} />
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
