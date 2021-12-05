import { css } from '@emotion/react';

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
      `}
    >
      <h1 css={css``}>Gaurav's Blog</h1>
      <ul
        css={css`
          list-style: none;
          display: flex;
          & > li {
            min-width: 100px;
            display: inline-block;
            padding: 20px 0 15px 0;
            cursor: pointer;
            text-align: center;
            border-bottom: 5px solid transparent;
            &:hover {
              border-bottom: 5px solid red;
            }
          }
        `}
      >
        <li>Home</li>
        <li>Portfolio</li>
        <li>Theme</li>
      </ul>
    </nav>
  );
}
