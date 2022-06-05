import { css, Global } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, theme as baseTheme } from 'twin.macro';
import { codeBlockStyles } from './theme';

export const textStyle = tw`dark:text-text-dark text-current`;
export const backgroundStyle = tw`dark:bg-background-800 bg-gray-50`;
export const hoverStyles = tw`cursor-pointer hocus:dark:bg-gray-800 hocus:bg-rose-100`;

export const focusStyles = (
    theme: string // todo inline this
) =>
    css({
        '&:focus-within': {
            ...tw`outline-width[2px] outline-style[dotted] outline-offset[3px] `,
            outlineColor:
                theme === 'light'
                    ? baseTheme`colors.red.600`
                    : baseTheme`colors.blue.600`,
        },
    });

export const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global
            styles={[
                tw``,
                css([
                    {
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
                    },
                    codeBlockStyles,
                    { '#comments::part(iframe)': tw`py-4` },
                ]),

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
                `,
            ]}
        />
    </>
);
