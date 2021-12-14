import { css } from '@emotion/react';
import { Nav } from '../components/nav';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../components/post';
import { useContext, useEffect } from 'react';
import { Theme, ThemeContext } from '../styles/theme';
import Footer from '../components/Footer';

function Home({ finalData }: any) {
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
    <div>
      <Nav />
      <div
        css={(theme) => css`
          color: ${theme.color.text.main};
          display: flex;
          justify-content: center;
          margin: 70px auto;
          @media (max-width: 600px) {
            margin: 40px auto;
          }
          @media (max-width: 500px) {
            margin: 30px auto;
          }
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
          {finalData.map(({ slug, data, imagePath, date }: any, index: any) => {
            return (
              <Post
                key={slug}
                slug={slug}
                data={data}
                date={date}
                imagePath={imagePath}
                isLast={index === finalData.length - 1}
              />
            );
          })}
        </div>
      </div>
      <Footer />
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
    const modifiedDate = fs.statSync(path.join('src/content/posts', file));

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
    props: {
      finalData: finalData.sort((data1: any, data2: any) => {
        const date1 = new Date(data1.data.publishedDate);
        const date2 = new Date(data2.data.publishedDate);
        if (date1 < date2) return 1;
        if (date1 > date2) return -1;
        return 0;
      }),
    }, // will be passed to the page component as props
  };
}
