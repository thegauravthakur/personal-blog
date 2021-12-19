import * as fs from 'fs';

import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { BlogCanvas } from '../components/BlogCanvas';
import Footer from '../components/Footer';
import CustomHead from '../components/shared/components/CustomHead';
import { readdirSync } from 'fs';

interface HomeProps {
  code: string;
  frontmatter: { [p: string]: any };
  targetImage: string;
}

function Home({ code, frontmatter, targetImage }: HomeProps) {
  const { metaDescription, title } = frontmatter;
  return (
    <div className={''}>
      <CustomHead
        metaDescription={metaDescription}
        metaTitle={title}
        ogImage={`/images/${targetImage}`}
        ogImageAlt={'Image for ' + title}
      />
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
  const imagePaths = readdirSync('public/images');

  const targetImage = imagePaths.find((image) => image.split('.')[0] === slug);
  if (!targetImage) {
    throw new Error('No image found');
  }
  const { code, frontmatter } = await bundleMDX({ source: files });

  return {
    props: { code, frontmatter, targetImage }, // will be passed to the page component as props
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
