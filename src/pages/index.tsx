import { css } from '@emotion/react';
import { Nav } from '../components/nav';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import matter from 'gray-matter';

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
            `
          }
        >
          <h2>JavaScript Array Methods with their Usage</h2>
          <div
            css={css`
              display: flex;
              margin: 30px 0;
              column-gap: 40px;
            `}
          >
            <div
              css={css`
                max-width: 400px;
              `}
            >
              <Image
                css={css`
                  border-radius: 10px;
                `}
                alt=''
                src='/images/js_array_methods.png'
                height={1800}
                width={3200}
              />
            </div>
            <div
              css={css`
                position: relative;
              `}
            >
              <p
                css={css`
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                `}
              >
                JavaScript is a very flexible programming language. It provides
                you with many pre-implemented helper methods which you can't
                find in any other language. In this article, I would try to list
                down all the important array methods in JavaScript
              </p>
              <button
                css={(theme) => css`
                  position: absolute;
                  bottom: 10px;
                  padding: 8px 16px;
                  border-radius: 6px;
                  color: ${theme.color.text.light};
                  border: 0;
                  cursor: pointer;
                  background-color: ${theme.color.primary};
                `}
              >
                Read More!
              </button>
            </div>
          </div>
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
