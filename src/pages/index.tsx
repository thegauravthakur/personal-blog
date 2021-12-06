import * as fs from 'fs';

import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { Nav } from '../components/nav';
import { BlogCanvas } from '../components/BlogCanvas';

interface HomeProps {
  code: string;
  frontmatter: { [p: string]: any };
}

function Home({ code, frontmatter }: HomeProps) {
  return (
    <div className={''}>
      <Nav />
      <BlogCanvas code={code} frontmatter={frontmatter} />
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readFileSync(path.join('src/_posts', 'Test.mdx'), 'utf-8');
  const { code, frontmatter } = await bundleMDX({ source: files });

  return {
    props: { code, frontmatter }, // will be passed to the page component as props
  };
}
export default Home;
