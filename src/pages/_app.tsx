import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import { useEffect, useState } from 'react';

import { NavBar } from '../components/Navbar';
import * as gtag from '../lib/gtag';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Theme, ThemeContext } from '../styles/theme';

import 'modern-normalize/modern-normalize.css';
import 'nprogress/nprogress.css';

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
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                strategy='afterInteractive'
            />
            <Script
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
                id='gtag-init'
                strategy='afterInteractive'
            />
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <GlobalStyles />
                <NavBar />
                <Component {...pageProps} />
            </ThemeContext.Provider>
        </>
    );
}

export default MyApp;
