import { useContext, useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { format } from 'date-fns';
import SocialShare from '../../../shared/components/SocialShare';
import { ArticleCanvasProps } from './ArticleCanvas.types';
import {
  headerStyles,
  headingStyles,
  StyledGutter,
  gutterWrapperStyles,
} from './ArticleCanvas.styles';
import { elementComponentMapping } from './utils';
import tw, { css } from 'twin.macro';
import {
  backgroundStyle,
  textStyle,
  focusStyles,
} from '../../../../styles/GlobalStyles';
import { ThemeContext } from '../../../../styles/theme';

const defaultStyles = css({
  a: tw`text-rose-600 dark:text-blue-600 focus:(outline-width[3px] outline-style[dotted] outline-offset[3px] outline-color[currentColor])`,
  'ul, ol': tw`ml-8 text-sm`,
  'h1, h2, h3, h4, h5, h6, pre, p, ul, ol, img': tw`my-5`,
  li: tw`list-style[decimal] p-1.5`,
});

const articleCanvasStyles = css([
  tw`max-w-[800px] my-16 mx-auto p-3 sm:p-5 md:p-8 rounded-xl`,
]);

export function ArticleCanvas({ code, frontmatter }: ArticleCanvasProps) {
  const ArticleContent = useMemo(() => getMDXComponent(code), [code]);
  const publishedDate = format(
    new Date(frontmatter.publishedDate),
    'LLL do, yyyy'
  );
  return (
    <div>
      <main
        css={[textStyle, backgroundStyle, defaultStyles, articleCanvasStyles]}
      >
        <header css={tw`my-5`}>
          <h1 css={tw`leading-9 text-center`}>{frontmatter.title}</h1>
          <div css={tw`border-t  border-gray-500 border-b py-2 `}>
            <div css={tw`grid grid-cols-2 place-items-center max-w-xl mx-auto`}>
              <p css={tw`m-0!`}>{publishedDate}</p>
              <p css={tw`m-0!`}>{frontmatter.author}</p>
            </div>
          </div>
        </header>
        <ArticleContent components={elementComponentMapping} />
        <SocialShare title={frontmatter.title} />
      </main>
    </div>
  );
}
