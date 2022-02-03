import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../page-components/post';
import { Footer } from '../page-components/Footer';
import CustomHead from '../page-components/CustomHead';
import tw from 'twin.macro';
import { backgroundStyle, textStyle } from '../styles/GlobalStyles';

export type MetaData = {
  title: string;
  publishedDate: string;
  author: string;
  description: string;
  tags: string;
};

export interface Article {
  slug: string;
  imagePath: string;
  metaData: MetaData;
}

export interface HomeProps {
  articles: Article[];
}

export const comparator = (articleA: Article, articleB: Article) => {
  const dateA = new Date(articleA.metaData.publishedDate);
  const dateB = new Date(articleB.metaData.publishedDate);
  if (dateA < dateB) return 1;
  if (dateA > dateB) return -1;
  return 0;
};

function Home({ articles }: HomeProps) {
  return (
    <>
      <CustomHead
        metaDescription={
          "Hi, welcome to my personal blog. I am a college student and a JavaScript enthusiast. In this blog, I'll share my knowledge related to various tech stack."
        }
        metaTitle={"Gaurav's Blog"}
        ogImage={'/images/og-default.png'}
        ogImageAlt={"Banner Image for Gaurav's Blog"}
      />
      <div
        css={[textStyle, tw`flex justify-center my-6 md:my-8 lg:my-10 mx-auto`]}
      >
        <main
          css={[
            backgroundStyle,
            tw`flex-1 rounded-lg max-w-6xl mx-0 py-10 px-5 my-7 md:(mx-5 px-5) lg:(m-7 p-10)`,
          ]}
        >
          {articles.map(({ slug, metaData, imagePath }: Article, index) => (
            <Post
              key={slug}
              slug={slug}
              data={metaData}
              imagePath={imagePath}
              isLast={index === articles.length - 1}
            />
          ))}
        </main>
      </div>
      <Footer />
    </>
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
