import { css } from '@emotion/react';
import { Nav } from '../components/nav';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Post } from '../components/post';

function Home({ finalData }) {
  console.log(finalData);
  return (
    <div>
      <Nav />
      <div
        css={(theme) => css`
          color: ${theme.color.text.main};
          display: flex;
          margin: 70px auto;
          max-width: 1800px;
          @media (max-width: 1370px) {
            flex-direction: column;
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
              margin: 30px;
              @media (max-width: 900px) {
                margin: 30px 20px;
                padding: 40px 20px;
              }
            `
          }
        >
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div
          css={(theme) => css`
            min-width: 350px;
            background-color: ${theme.color.background.main};
            border-radius: 10px;
            margin: 30px;
          `}
        >
          <p>world</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

export async function getStaticProps(context) {
  const finalData = [];
  const allFiles = fs.readdirSync('src/content/posts');
  allFiles.forEach((file) => {
    const files = fs.readFileSync(
      path.join('src/content/posts', file),
      'utf-8'
    );
    const { data } = matter(files);
    finalData.push({ slug: file.split('.')[0], data });
  });

  return {
    props: { finalData }, // will be passed to the page component as props
  };
}
