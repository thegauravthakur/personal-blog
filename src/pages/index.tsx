import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../page-components/post';
import Footer from '../page-components/Footer';
import { Canvas, CanvasWrapper } from '../page-components/index';
import {
  HomeProps,
  MetaData,
  MetaValues,
  Article,
} from '../page-components/index/Index.types';
import { comparator } from '../page-components/index/utils';
import CustomHead from '../page-components/shared/components/CustomHead';

function Home({ articles }: HomeProps) {
  return (
    <div>
      <CustomHead
        metaDescription={MetaValues.description}
        metaTitle={"Gaurav's Blog"}
        ogImage={'/images/og-default.png'}
        ogImageAlt={"Banner Image for Gaurav's Blog"}
      />
      <CanvasWrapper>
        <Canvas>
          {articles.map(({ slug, metaData, imagePath }: Article, index) => (
            <Post
              key={slug}
              slug={slug}
              data={metaData}
              imagePath={imagePath}
              isLast={index === articles.length - 1}
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
  const articles: Article[] = [];
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

    articles.push({
      slug: fileName,
      imagePath: targetImage,
      metaData,
    });
  }

  return {
    props: {
      articles: articles.sort(comparator),
    },
  };
}
