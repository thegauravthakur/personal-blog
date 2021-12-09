import { css } from '@emotion/react';
import { Nav } from '../components/nav';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../components/post';

function Home({ finalData }: any) {
  const { slug, data, imagePath } = finalData[0];
  console.log(slug, finalData);
  return (
    <div>
      <Nav />
      <div
        css={(theme) => css`
          color: ${theme.color.text.main};
          display: flex;
          justify-content: center;
          margin: 70px auto;
        `}
      >
        <div
          css={(theme) =>
            css`
              background-color: ${theme.color.background.main};
              flex: 1;
              padding: 40px;
              border-radius: 10px;
              max-width: 1200px;
              margin: 30px;
              @media (max-width: 900px) {
                margin: 30px 20px;
                padding: 40px 20px;
              }
              @media (max-width: 500px) {
                margin: 30px 0;
                padding: 40px 20px;
              }
            `
          }
        >
          {finalData.map(({ slug, data, imagePath }: any) => {
            return (
              <Post key={slug} slug={slug} data={data} imagePath={imagePath} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

export async function getStaticProps(context: any) {
  const finalData: any = [];
  const allFiles = fs.readdirSync('src/content/posts');
  allFiles.forEach((file) => {
    const files = fs.readFileSync(
      path.join('src/content/posts', file),
      'utf-8'
    );
    const { data } = matter(files);
    const allImages = fs.readdirSync('public/images');
    const getCorrectImage = allImages.find(
      (image) => image.split('.')[0] === file.split('.')[0]
    );
    if (!getCorrectImage) throw new Error('No image found');
    finalData.push({
      slug: file.split('.')[0],
      imagePath: getCorrectImage,
      data,
    });
  });

  return {
    props: { finalData }, // will be passed to the page component as props
  };
}
