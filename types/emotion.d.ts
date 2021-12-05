import '@emotion/react';
import theme from '../styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      background: {
        main: string;
        light: string;
        dark: string;
      };
      text: {
        main: string;
        light: string;
        dark: string;
      };
      link: {
        main: string;
        light: string;
        dark: string;
      };
      primary: string;
      information: string;
    };
  }
}
