import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post as Article } from '../components/post';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Canvas, CanvasWrapper } from '../components/index';
import {
  HomeProps,
  MetaData,
  MetaValues,
  Post,
} from '../components/index/Index.types';
import { comparator } from '../components/index/utils';
import { useRouter } from 'next/router';

function Home({ posts }: HomeProps) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Gaurav's Blog</title>
        <meta name='description' content={MetaValues.description} />
        <meta property='og:title' content="Gaurav's Blog" />
        <meta property='og:description' content={MetaValues.description} />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://personal-blog-kohl-tau.vercel.app/images/who-is-gaurav-thakur.png'
        />
        <meta property='og:image:alt' content='Who is gaurav thakur' />
        <meta property='og:image:width' content='3200' />
        <meta property='og:image:height' content='1800' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@thegauravthakur' />
        <meta name='twitter:title' content="Gaurav's Blog" />
        <meta name='twitter:description' content={MetaValues.description} />
        <meta
          name='twitter:image'
          content='https://personal-blog-kohl-tau.vercel.app/images/who-is-gaurav-thakur.png'
        />
        <link
          rel='canonical'
          href={`https://blog.gauravthakur.in${
            router.asPath === '/' ? '' : router.asPath
          }`}
        />
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
