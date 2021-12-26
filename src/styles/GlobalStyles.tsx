import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, theme as baseTheme } from 'twin.macro';

export const textStyle = tw`dark:text-gray-400 text-current`;
export const backgroundStyle = tw`dark:bg-background-800 bg-gray-50`;
export const primaryColor = tw`text-rose-600 dark:text-blue-600`;
export const hoverStyles = tw`cursor-pointer hocus:dark:bg-gray-800 hocus:bg-rose-100`;

export const focusStyles = (
  theme: string //todo inline this
) =>
  css({
    '&:focus-within': {
      ...tw`outline-width[3px] outline-style[dotted] outline-offset[3px]`,
      outlineColor:
        theme === 'light'
          ? baseTheme`colors.red.600`
          : baseTheme`colors.blue.600`,
    },
  });

export const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global
        styles={[
          tw``,
          css({
            body: {
              ...tw`dark:bg-black bg-background-200`,
              '&::-webkit-scrollbar': tw`w-2`,
              '&::-webkit-scrollbar-track': tw`bg-gray-500 dark:bg-gray-800`,
              '&::-webkit-scrollbar-thumb': tw`rounded-lg bg-gray-400 dark:bg-gray-500`,
            },
            h1: tw`text-3xl font-bold`,
            h2: tw`text-2xl font-bold`,
            h3: tw`text-xl font-bold`,
            h4: tw`text-lg font-bold`,
            '#nprogress .bar': tw`dark:bg-blue-600 bg-rose-600 h-1`,
          }),

          css`
            body {
              font-family: 'Inter', sans-serif;
              line-height: 1.8rem;
            }

            *,
            *::before,
            *::after {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            code {
              font-family: 'Source Code Pro', monospace;
            }

            //   body[data-theme='dark'] {
            //     --background-dark: #000000;
            //     --background-main: #161b22;
            //     --background-light: #282c34;
            //     --text-dark: #6b7280;
            //     --text-dim: #b7bcbe;
            //     --text-main: rgba(203, 213, 225, 0.9);
            //     --text-light: #d1d5db;
            //     --link-dark: #111827;
            //     --link-main: #1b6fff;
            //     --link-light: #d1d5db;
            //     --shadow: rgba(37, 99, 235, 0.3);
            //     --primary-dark: #1d4ed8;
            //     --primary-main: #2563eb;
            //     --primary-light: '';
            //     --information: rgba(191, 219, 254, 0.1);
            //     --title-main: #b7bcbe;
            //   }
            //
            //   body[data-theme='light'],
            //   :root {
            //     --background-dark: #e5e7eb;
            //     --background-main: #ffffff;
            //     --background-light: #94a3b8;
            //     --text-dim: #64748b;
            //     --text-dark: #6b7280;
            //     --text-main: #1e293b;
            //     --text-light: #ffffff;
            //     --link-dark: #111827;
            //     --link-main: #dc2626;
            //     --link-light: #d1d5db;
            //     --shadow: rgba(107, 114, 128, 0.6);
            //     --primary-dark: #dc2626;
            //     --primary-main: #e11d48;
            //     --primary-light: '';
            //     --information: rgba(220, 38, 38, 0.15);
            //     --title-main: #be123c;
            //   }
            //
          `,
        ]}
      />
    </>
  );
};
