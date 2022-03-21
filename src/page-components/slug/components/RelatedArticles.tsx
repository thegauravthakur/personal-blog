import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import { articleCanvasStyles } from '../../../components/ArticleCanvas/ArticleCanvas.styles';

const RelatedArticles = () => (
    <section css={articleCanvasStyles}>
        <h2
            css={css`
                color: var(--text-main);
                margin: 10px 0 20px 0;
            `}
        >
            Related Articles
        </h2>
        <div
            css={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 2rem;
                @media (max-width: 600px) {
                    grid-template-columns: 1fr;
                    grid-row-gap: 2rem;
                }
            `}
        >
            <div>
                <Image
                    css={css`
                        border-radius: 10px;
                    `}
                    src='/images/javascript-array-methods.png'
                    height={1800}
                    width={3200}
                    alt=''
                />
                <h4
                    css={css`
                        color: var(--text-main);
                    `}
                >
                    JavaScript Array Methods
                </h4>
            </div>
            <div>
                <Image
                    css={css`
                        border-radius: 10px;
                    `}
                    src='/images/javascript-array-methods.png'
                    height={1800}
                    width={3200}
                    alt=''
                />
                <h4
                    css={css`
                        color: var(--text-main);
                    `}
                >
                    JavaScript Array Methods
                </h4>
            </div>
        </div>
    </section>
);

export default RelatedArticles;
