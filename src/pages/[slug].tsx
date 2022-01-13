import * as fs from 'fs';

import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { Footer } from '../page-components/shared/components/Footer';

import CustomHead from '../page-components/shared/components/CustomHead';
import { readdirSync } from 'fs';
import { SlugProps } from '../page-components/slug/slug.types';
import { ArticleCanvas } from '../page-components/slug/components/ArticleCanvas';

function Home({ code, frontmatter, targetImage }: SlugProps) {
  const { metaDescription, title } = frontmatter;
  return (
    <>
      <CustomHead
        metaDescription={metaDescription}
        metaTitle={title}
        ogImage={`/images/${targetImage}`}
        ogImageAlt={'Image for ' + title}
      />
      <ArticleCanvas code={code} frontmatter={frontmatter} />
      <Footer />
    </>
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
