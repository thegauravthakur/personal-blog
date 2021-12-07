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

export async function getStaticProps(context) {
  const { slug } = context.params;
  const files = fs.readFileSync(
    path.join('src/content/posts', `${slug}.mdx`),
    'utf-8'
  );
  const { code, frontmatter } = await bundleMDX({ source: files });

  return {
    props: { code, frontmatter }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('src/content/posts', 'utf-8');
  console.log(files);
  return {
    fallback: false,
    paths: files.map((file) => {
      const [slug] = file.split('.');
      return { params: { slug } };
    }),
  };
}

export default Home;
