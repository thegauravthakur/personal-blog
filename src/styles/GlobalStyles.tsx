import { css, Global } from '@emotion/react';
export const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => css`
        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--background-dark);
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

        #nprogress .bar {
          background-color: var(--link-main);
          height: 3px;
        }

        body::-webkit-scrollbar {
          width: 8px;
        }

        body::-webkit-scrollbar-track {
          background-color: var(--background-light);
        }

        body::-webkit-scrollbar-thumb {
          background-color: var(--text-dark);
          border-radius: 10px;
        }

        body[data-theme='dark'] {
          --background-dark: #000000;
          --background-main: #161b22;
          --background-light: #282c34;
          --text-dark: #6b7280;
          --text-dim: #b7bcbe;
          --text-main: rgba(203, 213, 225, 0.9);
          --text-light: #d1d5db;
          --link-dark: #111827;
          --link-main: #1b6fff;
          --link-light: #d1d5db;
          --shadow: rgba(37, 99, 235, 0.3);
          --primary-dark: #1d4ed8;
          --primary-main: #2563eb;
          --primary-light: '';
          --information: rgba(191, 219, 254, 0.1);
          --title-main: #b7bcbe;
        }

        body[data-theme='light'],
        :root {
          --background-dark: #e5e7eb;
          --background-main: #ffffff;
          --background-light: #94a3b8;
          --text-dim: #64748b;
          --text-dark: #6b7280;
          --text-main: #1e293b;
          --text-light: #ffffff;
          --link-dark: #111827;
          --link-main: #dc2626;
          --link-light: #d1d5db;
          --shadow: rgba(107, 114, 128, 0.6);
          --primary-dark: #dc2626;
          --primary-main: #e11d48;
          --primary-light: '';
          --information: rgba(220, 38, 38, 0.15);
          --title-main: #be123c;
        }
      `}
    />
  );
};
