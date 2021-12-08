import { css } from '@emotion/react';
import Image from 'next/image';
import Truncate from 'react-text-truncate';
import { useMediaQuery } from 'react-responsive';

export function Post() {
  const is1200 = useMediaQuery({ maxWidth: 1200 });
  const text = `JavaScript is a very flexible programming language. It provides\\n' +
      "                you with many pre-implemented helper methods which you can't\\n" +
      '                find in any other language. In this article, I would try to list\\n' +
      '                down all the important array methods in JavaScript`;
  return (
    <div
      css={css`
        margin-bottom: 50px;
      `}
    >
      <h2>JavaScript Array Methods with their Usage</h2>
      <div
        css={css`
          display: flex;
          margin: 30px 0;
          column-gap: 40px;
          @media (max-width: 900px) {
            column-gap: 30px;
          }
          @media (max-width: 600px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            max-width: 400px;
            @media (max-width: 1370px) {
              max-width: 300px;
            }
            @media (max-width: 600px) {
              max-width: 100%;
            }
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
          <div
            css={css`
              @media (max-width: 600px) {
                margin: 20px 0;
              }
            `}
          >
            <Truncate line={4} element='span' truncateText='…' text={text} />
          </div>
          <button
            css={(theme) => css`
              position: absolute;
              bottom: 10px;
              left: 0;
              padding: 8px 16px;
              border-radius: 6px;
              color: ${theme.color.text.light};
              border: 0;
              cursor: pointer;
              background-color: ${theme.color.primary};
              @media (max-width: 600px) {
                position: static;
                display: block;
              }
            `}
          >
            Read More!
          </button>
        </div>
      </div>
    </div>
  );
}
