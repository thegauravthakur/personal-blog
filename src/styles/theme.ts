import { createContext, Dispatch, SetStateAction } from 'react';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}>({ theme: 'dark', setTheme: () => {} });

export type Theme = 'dark' | 'light';

export const darkTheme = {
  type: 'dark',
  color: {
    background: {
      light: '',
      main: '#161B22',
      dark: '#000000',
    },
    text: {
      light: '#D1D5DB',
      main: '#B7BCBE',
      dark: '#6B7280',
    },
    link: {
      light: '#D1D5DB',
      main: '#1B6FFF',
      dark: '#111827',
    },
    primary: '#2563EB',
    information: 'rgba(191,219,254,0.1)',
  },
} as const;

export const lightTheme = {
  type: 'light',
  color: {
    background: {
      light: '',
      main: '#FFFFFF',
      dark: '#E5E7EB',
    },
    text: {
      light: '#FFFFFF',
      main: '#1e293b',
      dark: '#6B7280',
    },
    link: {
      light: '#D1D5DB',
      main: '#dc2626',
      dark: '#111827',
    },
    primary: '#dc2626',
    information: 'rgba(220,38,38,0.15)',
  },
} as const;
