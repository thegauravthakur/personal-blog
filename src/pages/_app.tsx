// import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import Router, { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeContext, Theme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import { Nav } from '../page-components/shared/components/Nav';
import CustomHead from '../page-components/app/components/CustomHead';
import * as gtag from '../lib/gtag';
import Script from 'next/script';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CustomHead theme={theme} />
        <GlobalStyles />
        <Nav />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
