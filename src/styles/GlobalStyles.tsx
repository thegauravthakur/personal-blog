import { css, Global } from '@emotion/react';
export const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => css`
        body {
          font-family: 'Inter', sans-serif;
          background-color: ${theme.color.background.dark};
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
          background-color: ${theme.color.link.main};
          height: 3px;
        }
      `}
    />
  );
};
