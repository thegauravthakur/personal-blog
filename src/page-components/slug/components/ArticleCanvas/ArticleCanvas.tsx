import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { format } from 'date-fns';
import SocialShare from '../../../shared/components/SocialShare';
import { ArticleCanvasProps } from './ArticleCanvas.types';
import {
  articleCanvasStyles,
  defaultStyles,
  headerStyles,
  headingStyles,
  StyledGutter,
  gutterWrapperStyles,
} from './ArticleCanvas.styles';
import { elementComponentMapping } from './utils';

export function ArticleCanvas({ code, frontmatter }: ArticleCanvasProps) {
  const ArticleContent = useMemo(() => getMDXComponent(code), [code]);
  const publishedDate = format(
    new Date(frontmatter.publishedDate),
    'LLL do, yyyy'
  );
  return (
    <div>
      <main css={[defaultStyles, articleCanvasStyles]}>
        <header css={headerStyles}>
          <h1 css={headingStyles}>{frontmatter.title}</h1>
          <div css={gutterWrapperStyles}>
            <StyledGutter>
              <p>{publishedDate}</p>
              <p>{frontmatter.author}</p>
            </StyledGutter>
          </div>
        </header>
        <ArticleContent components={elementComponentMapping} />
        <SocialShare title={frontmatter.title} />
      </main>
    </div>
  );
}
