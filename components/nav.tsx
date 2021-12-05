import { css } from '@emotion/react';
import { AiFillAccountBook, AiOutlineMenu } from 'react-icons/ai';
export function Nav() {
  return (
    <nav
      css={(theme) => css`
        color: white;
        background-color: ${theme.color.background.main};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        @media (max-width: 930px) {
          padding: 0 50px;
        }
        @media (max-width: 780px) {
          padding: 0 40px;
        }
        @media (max-width: 700px) {
          padding: 0 20px;
        }
      `}
    >
      <h1
        css={(theme) => css`
          font-size: 20px;
          color: ${theme.color.text.main};
        `}
      >
        Gaurav's Blog
      </h1>
      <ul
        css={(theme) => css`
          list-style: none;
          color: ${theme.color.text.main};
          display: flex;
          @media (max-width: 740px) {
            display: none;
          }
          & > li {
            min-width: 100px;
            display: inline-block;
            padding: 16px 0 11px 0;
            cursor: pointer;
            text-align: center;
            border-bottom: 5px solid transparent;
            &:hover {
              border-bottom: 5px solid ${theme.color.link.main};
            }
          }
        `}
      >
        <li>Home</li>
        <li>Portfolio</li>
        <li>Theme</li>
      </ul>
      <AiOutlineMenu
        css={css`
          display: none;
          @media (max-width: 740px) {
            display: inline-block;
            margin: 20px 0;
          }
        `}
      />
    </nav>
  );
}
