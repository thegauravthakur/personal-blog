import { createContext, Dispatch, SetStateAction } from 'react';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}>({ theme: 'dark', setTheme: () => {} });

export type Theme = 'dark' | 'light';

export const theme = {
  color: {
    background: {
      light: 'var(--background-light)',
      main: 'var(--background-main)',
      dark: 'var(--background-dark)',
    },
    text: {
      light: 'var(--text-light)',
      main: 'var(--text-main)',
      dark: 'var(--text-dark)',
    },
    link: {
      light: 'var(--link-light)',
      main: 'var(--link-main)',
      dark: 'var(--link-dark)',
    },
    shadow: 'var(--shadow)',
    primary: {
      light: 'var(--primary-light)',
      main: 'var(--primary-main)',
      dark: 'var(--primary-dark)',
    },
    title: {
      light: 'var(--title-light)',
      main: 'var(--title-main)',
      dark: 'var(--title-dark)',
    },
    information: 'var(--information)',
  },
} as const;
