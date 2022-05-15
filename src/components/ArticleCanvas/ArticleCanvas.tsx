import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import tw from 'twin.macro';

import SocialShare from '../../page-components/shared/components/SocialShare';
import { ArticleCanvasProps as ArticleCanvasProperties } from './ArticleCanvas.types';
import { elementComponentMapping } from './ArticleCanvas.utils';

export function ArticleCanvas({ code, frontmatter }: ArticleCanvasProperties) {
    const ArticleContent = useMemo(() => getMDXComponent(code), [code]);
    const publishedDate = format(
        new Date(frontmatter.publishedDate),
        'LLL do, yyyy'
    );
    return (
        <div>
            <header css={tw`my-5`}>
                <h1 css={tw`leading-9 text-center`}>{frontmatter.title}</h1>
                <div css={tw`border-t  border-gray-500 border-b py-2 my-8 `}>
                    <div
                        css={tw`grid grid-cols-2 place-items-center max-w-xl mx-auto`}
                    >
                        <p css={tw`m-0!`}>{publishedDate}</p>
                        <p css={tw`m-0!`}>{frontmatter.author}</p>
                    </div>
                </div>
            </header>
            <ArticleContent components={elementComponentMapping} />
            <SocialShare title={frontmatter.title} />
        </div>
    );
}
