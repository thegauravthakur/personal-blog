import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { css, Global } from '@emotion/react';
import { Code, H2, Pre } from './HTMLElements';
import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';

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
        border-radius: 20px;
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
        ol {
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
      <Component
        components={{
          pre: Pre,
          code: Code,
          h2: H2,
        }}
      />
    </main>
  );
}
