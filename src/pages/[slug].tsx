import * as fs from 'fs';

import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { Nav } from '../components/nav';
import { BlogCanvas } from '../components/BlogCanvas';
import { useContext, useEffect } from 'react';
import { Theme, ThemeContext } from '../styles/theme';
import Footer from '../components/Footer';

interface HomeProps {
  code: string;
  frontmatter: { [p: string]: any };
}

function Home({ code, frontmatter }: HomeProps) {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (!storedTheme) {
      const isDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (isDarkTheme && theme !== 'dark') setTheme('dark');
      if (!isDarkTheme && theme !== 'light') setTheme('light');
    } else {
      if (storedTheme !== theme) setTheme(storedTheme);
    }
  }, [theme, setTheme]);
  return (
    <div className={''}>
      <Nav />
      <BlogCanvas code={code} frontmatter={frontmatter} />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context: any) {
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
  return {
    fallback: false,
    paths: files.map((file) => {
      const [slug] = file.split('.');
      return { params: { slug } };
    }),
  };
}

export default Home;
