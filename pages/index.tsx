import * as fs from 'fs';

import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { CodeBlock, PreBlock } from '../components/HighlighSyntax';
import { css } from '@emotion/react';

interface HomeProps {
  code: string;
  frontmatter: { [p: string]: any };
}

function Home({ code, frontmatter }: HomeProps) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className={''}>
      <main
        css={css`
          max-width: 1000px;
          margin: 0 auto;
        `}
      >
        <Component
          components={{
            pre: (props) => <PreBlock {...props} />,
            code: (props) => <CodeBlock {...props} />,
          }}
        />
      </main>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const files = fs.readFileSync(path.join('_posts', 'Test.mdx'), 'utf-8');
  const { code, frontmatter } = await bundleMDX({ source: files });

  return {
    props: { code, frontmatter }, // will be passed to the page component as props
  };
}
