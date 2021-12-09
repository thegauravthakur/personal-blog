// import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;