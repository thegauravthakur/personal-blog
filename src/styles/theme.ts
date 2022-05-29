import { createContext, Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';

export const ThemeContext = createContext<{
    theme: string;
    setTheme: Dispatch<SetStateAction<'dark' | 'light'>>;
}>({ theme: 'dark', setTheme: () => {} });

export type Theme = 'dark' | 'light';

export const codeBlockStyles = css({
    '.hljs': {
        display: 'block',
        overflowX: 'auto',
        padding: '0.5em',
        ...tw`text-[#383a42] bg-[#fafafa] dark:(text-[#abb2bf] bg-[#282c34])`,
    },
    '.hljs-operator': tw`dark:text-[#F92672]`,
    '.hljs-pattern-match': tw`dark:text-[#F92672]`,
    '.hljs-pattern-match .hljs-constructor': tw`dark:text-[#61aeee]`,
    '.hljs-function': tw`dark:text-[#61aeee]`,
    '.hljs-function .hljs-params': tw`dark:text-[#A6E22E]`,
    '.hljs-function .hljs-params .hljs-typing': tw`dark:text-[#FD971F]`,
    '.hljs-module-access .hljs-module': tw`dark:text-[#7e57c2]`,
    '.hljs-constructor': tw`dark:text-[#e2b93d]`,
    '.hljs-constructor .hljs-string': tw`dark:text-[#9CCC65]`,
    '.hljs-comment': {
        ...tw`text-[#a0a1a7] dark:text-[#b18eb1]`,
        fontStyle: 'italic',
    },
    '.hljs-quote': {
        ...tw`text-[#a0a1a7] dark:text-[#b18eb1]`,
        fontStyle: 'italic',
    },
    '.hljs-doctag': tw`text-[#a626a4] dark:text-[#c678dd]`,
    '.hljs-formula': tw`text-[#a626a4] dark:text-[#c678dd]`,
    '.hljs-section': tw`text-[#e45649] dark:text-[#e06c75]`,
    '.hljs-name': tw`text-[#e45649] dark:text-[#e06c75]`,
    '.hljs-selector-tag': tw`text-[#e45649] dark:text-[#e06c75]`,
    '.hljs-deletion': tw`text-[#e45649] dark:text-[#e06c75]`,
    '.hljs-subst': tw`text-[#e45649] dark:text-[#e06c75]`,
    '.hljs-literal': tw`text-[#0184bb] dark:text-[#56b6c2]`,
    '.hljs-string': tw`text-[#50a14f] dark:text-[#98c379]`,
    '.hljs-regexp': tw`text-[#50a14f] dark:text-[#98c379]`,
    '.hljs-addition': tw`text-[#50a14f] dark:text-[#98c379]`,
    '.hljs-attribute': tw`text-[#50a14f] dark:text-[#98c379]`,
    '.hljs-meta-string': tw`text-[#50a14f] dark:text-[#98c379]`,
    '.hljs-built_in': tw`text-[#c18401] dark:text-[#e6c07b]`,
    '.hljs-class .hljs-title': tw`text-[#c18401] dark:text-[#e6c07b]`,
    '.hljs-attr': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-variable': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-template-variable': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-type': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-selector-class': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-selector-attr': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-selector-pseudo': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-number': tw`text-[#986801] dark:text-[#d19a66]`,
    '.hljs-symbol': tw`text-[#4078f2] dark:text-[#61aeee]`,
    '.hljs-bullet': tw`text-[#4078f2] dark:text-[#61aeee]`,
    '.hljs-link': {
        ...tw`text-[#4078f2] dark:text-[#61aeee]`,
        textDecoration: 'underline',
    },
    '.hljs-meta': tw`text-[#4078f2] dark:text-[#61aeee]`,
    '.hljs-selector-id': tw`text-[#4078f2] dark:text-[#61aeee]`,
    '.hljs-title': tw`text-[#4078f2] dark:text-[#61aeee]`,
    '.hljs-emphasis': {
        fontStyle: 'italic',
    },
    '.hljs-strong': {
        fontWeight: 'bold',
    },
    '.hljs-keyword': tw`dark:text-[#F92672] text-[#a626a4]`,
});
