import { useMemo } from 'react';
import Image from 'next/image';
import { getMDXComponent } from 'mdx-bundler/client';
import { css, Global } from '@emotion/react';
import { Code, H2, Pre, Img } from './HTMLElements';
import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { format } from 'date-fns';
import { HiMoon } from 'react-icons/hi';
interface HomeProps {
  code: string;
  frontmatter: { [p: string]: any };
}

export function BlogCanvas({ code, frontmatter }: HomeProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <main
      css={(theme) => css`
        max-width: 800px;
        margin: 70px auto;
        padding: 30px;
        @media (max-width: 780px) {
          padding: 20px;
        }
        border-radius: 10px;
        color: ${theme.color.text.main};
        background-color: ${theme.color.background.main};
        //default styles
        h1,
        h2,
        h3,
        h4,
        h6,
        pre,
        p,
        ul,
        ol,
        img {
          margin: 1.2rem 0;
        }
        a {
          color: ${theme.color.link.main};
          text-decoration: none;
          &:hover {
            text-decoration: ${theme.color.link.main};
          }
        }
        ul,
        ol {
          margin-left: 2rem;
        }
      `}
    >
      <header
        css={css`
          margin: 1.2rem 0;
        `}
      >
        <h1
          css={css`
            text-align: center;
            line-height: 3rem;
          `}
        >
          {frontmatter.title}
        </h1>
        <div
          css={(theme) => css`
            border-top: 1px solid ${theme.color.text.dark};
            border-bottom: 1px solid ${theme.color.text.dark};
            padding: 8px 0;
            margin: 2rem 0;
            display: flex;
            justify-content: center;
            & p {
              margin: 0;
              font-size: 15px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              column-gap: 100px;
              & > p {
                margin: 0 !important;
              }
              @media (max-width: 900px) {
                column-gap: 70px;
              }
              @media (max-width: 600px) {
                column-gap: 40px;
              }
              @media (max-width: 500px) {
                column-gap: 30px;
              }
              @media (max-width: 400px) {
                column-gap: 20px;
              }
            `}
          >
            <p>{format(new Date(frontmatter.publishedDate), 'LLL do, yyyy')}</p>
            <p>{frontmatter.author}</p>
          </div>
        </div>
      </header>
      <Component
        components={{
          pre: Pre,
          code: Code,
          h2: H2,
          img: Img,
        }}
      />
    </main>
  );
}
