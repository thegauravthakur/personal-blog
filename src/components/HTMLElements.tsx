import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore //todo check this issue
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable';
import lightStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';
import useLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactComponentElement,
  useState,
} from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BiCheck } from 'react-icons/bi';

// todo avoid any here
type HTMLElementProps = DetailedHTMLProps<HTMLAttributes<any>, any>;

export const Pre = ({ children: code }: HTMLElementProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const { children, className } = (code as ReactComponentElement<any>).props;
  const [showTick, setShowTick] = useState(false);

  useLayoutEffect(() => {
    const { theme } = document.body.dataset;
    setDarkMode(theme === 'dark');
  }, []);

  const [, language] = className?.split('-');
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <SyntaxHighlighter
        style={!darkMode ? lightStyle : style}
        showLineNumbers
        css={(theme) => css`
          margin: 0.5rem 0;
          border-radius: 10px;
          border: 1px solid var(--information);
          font-size: 0.875rem;
          line-height: 1.5rem;
        `}
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
          <div
            css={css`
              position: absolute;
              border-radius: 50px;
              display: flex;
              bottom: 4px;
              right: 20px;
              padding: 10px;
              transition: background-color 0.5s ease-out;
              cursor: pointer;
              &:hover {
                background-color: var(--information);
              }
            `}
          >
            <MdOutlineContentCopy css={(theme) => css``} />
          </div>
        </CopyToClipboard>
      ) : (
        <BiCheck
          css={(theme) => css`
            position: absolute;
            border-radius: 50px;
            bottom: 4px;
            right: 20px;
            padding: 6px;
            transition: background-color 0.5s ease-out;
            cursor: pointer;
            &:hover {
              background-color: var(--information);
            }
          `}
          color='#16a34a'
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
      css={(theme) =>
        css`
          background-color: var(--information);
          padding: 0.125rem 0.25rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        `
      }
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
    <h2
      css={css`
        scroll-margin-top: 1.2rem;
      `}
      id={anchor}
    >
      {children}
      <a
        css={css`
          font-size: 18px;
          margin: 0 10px;
        `}
        href={link}
      >
        #
      </a>
    </h2>
  );
};

export const H3 = ({ children }: HTMLElementProps) => {
  const anchor = getAnchor(children as string);
  const link = `#${anchor}`;
  return (
    <h3
      css={css`
        scroll-margin-top: 1.2rem;
      `}
      id={anchor}
    >
      {children}
      <a
        css={css`
          font-size: 16px;
          margin: 0 10px;
        `}
        href={link}
      >
        #
      </a>
    </h3>
  );
};

export const Img = ({ alt, src }: any) => {
  const [altText, dimension] = alt.split('+');
  const { width, height } = JSON.parse(dimension ?? '{}');
  return (
    <Image
      css={css`
        border-radius: 10px;
      `}
      width={width ?? 3200}
      height={height ?? 1800}
      src={src}
      alt={altText}
    />
  );
};
