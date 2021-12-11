import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore //todo check this issue
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable';
import lightStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactComponentElement,
  useContext,
} from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { ThemeContext } from '../styles/theme';

// todo avoid any here
type HTMLElementProps = DetailedHTMLProps<HTMLAttributes<any>, any>;

export const Pre = ({ children: code }: HTMLElementProps) => {
  const { theme: currentTheme } = useContext(ThemeContext);
  const { children, className } = (code as ReactComponentElement<any>).props;

  const [_, language] = className?.split('-');
  return (
    <>
      <SyntaxHighlighter
        style={currentTheme === 'light' ? lightStyle : style}
        showLineNumbers
        css={(theme) => css`
          margin: 0.5rem 0;
          border-radius: 10px;
          border: 1px solid ${theme.color.information};
          font-size: 0.875rem;
          line-height: 1.5rem;
        `}
        language={language}
      >
        {children}
      </SyntaxHighlighter>
    </>
  );
};

export const Code = ({ className, ...rest }: any) => {
  const language = className?.split('-');
  if (language) return <code className={className} {...rest} />;
  return (
    <code
      css={(theme) =>
        css`
          background-color: ${theme.color.information};
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
        display: flex;
        align-items: center;
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
        display: flex;
        align-items: center;
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
