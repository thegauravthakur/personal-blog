import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore //todo check this issue
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable';
import lightStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactComponentElement,
  useContext,
  useState,
} from 'react';
import Image from 'next/image';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BiCheck } from 'react-icons/bi';
import { ThemeContext } from '../styles/theme';
import { fadeAnimation } from '../styles/animation';
import tw, { theme as baseTheme } from 'twin.macro';

// todo avoid any here
type HTMLElementProps = DetailedHTMLProps<HTMLAttributes<any>, any>;

export const Pre = ({ children: code }: HTMLElementProps) => {
  const { theme } = useContext(ThemeContext);
  const { children, className } = (code as ReactComponentElement<any>).props;
  const [showTick, setShowTick] = useState(false);
  const [, language] = className?.split('-');

  return (
    <div css={tw`relative`}>
      <SyntaxHighlighter
        style={theme !== 'dark' ? lightStyle : style}
        showLineNumbers
        css={tw`my-2 rounded-xl border dark:border-gray-700 border-rose-200 text-sm leading-6`}
        language={language}
      >
        {children}
      </SyntaxHighlighter>
      {!showTick ? (
        <CopyToClipboard
          onCopy={() => {
            setShowTick(true);
            setTimeout(() => setShowTick(false), 6000);
          }}
          text={children}
        >
          <button
            css={tw`hocus:(dark:bg-gray-700 bg-rose-100 outline-none) absolute bg-transparent border-0 rounded-full flex bottom-1 right-5 cursor-pointer p-2.5 transition-colors duration-500 ease-out`}
          >
            <MdOutlineContentCopy
              css={[
                tw`dark:text-gray-400 text-gray-500`,
                { animation: `ease-in ${fadeAnimation} 0.3s` },
              ]}
            />
          </button>
        </CopyToClipboard>
      ) : (
        <BiCheck
          css={tw`hocus:(dark:bg-gray-700 bg-rose-100 outline-none) absolute bg-transparent border-0 rounded-full flex bottom-1 right-5 cursor-pointer p-1.5 transition-colors duration-500 ease-out`}
          color={baseTheme`colors.green.500`}
          size={38}
        />
      )}
    </div>
  );
};

export const Code = ({ className, ...rest }: any) => {
  const language = className?.split('-');
  if (language) return <code className={className} {...rest} />;
  return (
    <code
      css={tw`dark:bg-gray-800 bg-rose-100 py-0.5 px-1 font-size[calc(1em - 10%) !important] rounded-md`}
      {...rest}
    />
  );
};

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

export const H2 = ({ children }: HTMLElementProps) => {
  const anchor = getAnchor(children as string);
  const link = `#${anchor}`;
  return (
    <h2 css={tw`scroll-margin-top[1.2rem]`} id={anchor}>
      {children}
      <a css={tw`text-lg mx-2.5`} href={link}>
        #
      </a>
    </h2>
  );
};

export const H3 = ({ children }: HTMLElementProps) => {
  const anchor = getAnchor(children as string);
  const link = `#${anchor}`;
  return (
    <h3 css={tw`scroll-margin-top[1.2rem]`} id={anchor}>
      {children}
      <a css={tw`text-[16px] mx-2.5`} href={link}>
        #
      </a>
    </h3>
  );
};

export const H4 = ({ children }: HTMLElementProps) => {
  const anchor = getAnchor(children as string);
  const link = `#${anchor}`;
  return (
    <h4 css={tw`scroll-margin-top[1.2rem]`} id={anchor}>
      {children}
      <a css={tw`text-sm mx-2.5`} href={link}>
        #
      </a>
    </h4>
  );
};

export const Img = ({ alt, src }: any) => {
  const [altText, dimension] = alt.split('+');
  const { width, height } = JSON.parse(dimension ?? '{}');
  return (
    <Image
      css={tw`rounded-xl`}
      width={width ?? 3200}
      height={height ?? 1800}
      src={src}
      alt={altText}
    />
  );
};
