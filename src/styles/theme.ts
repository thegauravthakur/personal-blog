import { createContext, Dispatch, SetStateAction } from 'react';

export const ThemeContext = createContext<{
    theme: string;
    setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}>({ theme: 'dark', setTheme: () => {} });

export type Theme = 'dark' | 'light';
