import { MDXComponents } from 'mdx/types';
import { Code, H2, H3, H4, Img, Pre } from '../../../HTMLElements';

export const elementComponentMapping: MDXComponents = {
  pre: Pre,
  code: Code,
  h2: H2,
  h3: H3,
  h4: H4,
  img: Img,
};
