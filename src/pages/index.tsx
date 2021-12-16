import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post as Article } from '../components/post';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Canvas, CanvasWrapper } from '../components/index';
import { HomeProps, MetaData, Post } from '../components/index/Index.types';
import { comparator } from '../components/index/utils';

function Home({ posts }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Gaurav's Blog</title>
      </Head>
      <CanvasWrapper>
        <Canvas>
          {posts.map(({ slug, metaData, imagePath }: Post, index) => (
            <Article
              key={slug}
              slug={slug}
              data={metaData}
              imagePath={imagePath}
              isLast={index === posts.length - 1}
            />
          ))}
        </Canvas>
      </CanvasWrapper>
      <Footer />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const posts: Post[] = [];
  const filePaths = readdirSync('src/content/posts');

  for (const filePath of filePaths) {
    const [fileName] = filePath.split('.');

    const file = readFileSync(
      path.join('src/content/posts', filePath),
      'utf-8'
    );

    const { data: metaData } = matter(file) as unknown as { data: MetaData };

    const imagePaths = readdirSync('public/images');

    const targetImage = imagePaths.find(
      (image) => image.split('.')[0] === fileName
    );

    if (!targetImage) throw new Error('No image found');

    posts.push({
      slug: fileName,
      imagePath: targetImage,
      metaData,
    });
  }

  return {
    props: {
      posts: posts.sort(comparator),
    },
  };
}
