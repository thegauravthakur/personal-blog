import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactComponentElement,
} from 'react';
import { css } from '@emotion/react';

type PreBlockProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export const PreBlock = ({ children: code }: PreBlockProps) => {
  const { children, className } = (code as ReactComponentElement<any>).props;
  const [_, language] = className?.split('-');
  return (
    <SyntaxHighlighter
      style={style}
      showLineNumbers
      css={css`
        margin: 8px 0;
        border-radius: 10px;
      `}
      language={language}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export const CodeBlock = ({ className, ...rest }: any) => {
  const language = className?.split('-');
  if (language) return <code className={className} {...rest} />;
  return (
    <code
      css={(theme) =>
        css`
          color: ${theme.color.primary};
          background-color: ${theme.color.primary2};
          padding: 2px 4px;
          border-radius: 6px;
        `
      }
      {...rest}
    />
  );
};
