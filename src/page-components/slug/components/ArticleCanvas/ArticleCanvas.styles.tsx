import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const defaultStyles = css`
  h1,
  h2,
  h3,
  h4,
  h6,
  pre,
  p,
  ul,
  ol,
  img {
    margin: 1.2rem 0;
  }
  a {
    color: var(--link-main);
    text-decoration: none;
    &:hover {
      text-decoration: var(--link-main);
    }
  }
  ul,
  ol {
    margin-left: 2rem;
    font-size: 14px;
  }
  color: var(--text-main);
`;

export const articleCanvasStyles = css`
  max-width: 800px;
  margin: 70px auto;
  padding: 30px;
  @media (max-width: 780px) {
    padding: 20px;
  }
  border-radius: 10px;
  background-color: var(--background-main);
`;

export const headerStyles = css`
  margin: 1.2rem 0;
`;

export const headingStyles = css`
  text-align: center;
  line-height: 3rem;
`;

export const StyledGutter = styled.div`
  display: flex;
  column-gap: 100px;
  & > p {
    margin: 0 !important;
  }
  @media (max-width: 900px) {
    column-gap: 70px;
  }
  @media (max-width: 600px) {
    column-gap: 40px;
  }
  @media (max-width: 500px) {
    column-gap: 30px;
  }
  @media (max-width: 400px) {
    column-gap: 20px;
  }
`;

export const gutterWrapperStyles = css`
  border-top: 1px solid var(--text-dark);
  border-bottom: 1px solid var(--text-dark);
  padding: 8px 0;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  & p {
    margin: 0;
    font-size: 15px;
  }
`;
