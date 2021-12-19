import React from 'react';
import { css, Global } from '@emotion/react';

const ThemeTransition = () => {
  return (
    <Global
      styles={css`
        * {
          transition: background-color 0.3s ease-in-out;
        }
      `}
    />
  );
};

export default ThemeTransition;
