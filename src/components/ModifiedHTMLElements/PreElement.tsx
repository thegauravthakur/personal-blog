import { ReactComponentElement, useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiCheck } from 'react-icons/bi';
import { MdOutlineContentCopy } from 'react-icons/md';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tw, { theme as baseTheme } from 'twin.macro';

import { fadeAnimation } from '../../styles/animation';
import { ThemeContext } from '../../styles/theme';
import { HTMLElementProps } from './ModifiedHTMLElements.types';

export const PreElement = ({
    children: code,
}: HTMLElementProps<HTMLPreElement>) => {
    const { theme } = useContext(ThemeContext);
    const { children, className } = (code as ReactComponentElement<any>).props;
    const [showTick, setShowTick] = useState(false);
    const [, language] = (className as string)?.split('-') ?? [];

    return (
        <div css={tw`relative`}>
            <SyntaxHighlighter
                showLineNumbers
                css={tw`my-2 rounded-xl border dark:border-gray-700 border-rose-200 text-sm leading-6`}
                language={language}
                useInlineStyles={false}
            >
                {children}
            </SyntaxHighlighter>
            {!showTick ? (
                <CopyToClipboard
                    text={children}
                    onCopy={() => {
                        setShowTick(true);
                        setTimeout(() => setShowTick(false), 6000);
                    }}
                >
                    <button
                        aria-label='copy code content'
                        css={tw`hocus:(dark:bg-gray-700 bg-rose-100 outline-none) absolute bg-transparent border-0 rounded-full flex bottom-1 right-5 cursor-pointer p-2.5 transition-colors duration-500 ease-out`}
                        title='copy code content'
                    >
                        <MdOutlineContentCopy
                            css={[
                                tw`dark:text-text-dark text-gray-500`,
                                { animation: `ease-in ${fadeAnimation} 0.3s` },
                            ]}
                        />
                    </button>
                </CopyToClipboard>
            ) : (
                <BiCheck
                    color={baseTheme`colors.green.500`}
                    css={tw`hocus:(dark:bg-gray-700 bg-rose-100 outline-none) absolute bg-transparent border-0 rounded-full flex bottom-1 right-5 cursor-pointer p-1.5 transition-colors duration-500 ease-out`}
                    size={38}
                />
            )}
        </div>
    );
};
