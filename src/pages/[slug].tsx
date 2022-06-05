import { bundleMDX } from 'mdx-bundler';
import * as fs from 'node:fs';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import tw, { css } from 'twin.macro';
import Giscus from '@giscus/react';

import { ArticleCanvas } from '../components/ArticleCanvas';
import { CustomHead } from '../components/CustomHead';
import { Footer } from '../components/Footer';
import { WrittenBySection } from '../components/WrittenBySection';
import { backgroundStyle, textStyle } from '../styles/GlobalStyles';

export interface HomeProps {
    code: string;
    frontmatter: { [p: string]: any };
    targetImage: string;
}

const defaultStyles = css({
    a: tw`text-rose-600 dark:text-blue-600 focus:(outline-width[3px] outline-style[dotted] outline-offset[3px] outline-color[currentColor])`,
    'ul, ol': tw`ml-8`,
    'h1, h2, h3, h4, h5, h6, pre, p, ul, ol, img': tw`my-5`,
    li: tw`list-style[decimal] p-1.5`,
});

const articleCanvasStyles = css([
    tw`max-w-[800px] my-16 mx-auto pt-5 pb-12 px-4 sm:(px-6 pt-7) md:(px-8 pt-12) rounded-xl`,
]);

const canvasStyles = css([
    textStyle,
    backgroundStyle,
    defaultStyles,
    articleCanvasStyles,
]);
function Home({ code, frontmatter, targetImage }: HomeProps) {
    const { metaDescription, title } = frontmatter;
    return (
        <>
            <CustomHead
                metaDescription={metaDescription}
                metaTitle={title}
                ogImage={`/images/${targetImage}`}
                ogImageAlt={`Image for ${title}`}
            />
            <main css={canvasStyles}>
                <ArticleCanvas code={code} frontmatter={frontmatter} />
            </main>
            <section css={[canvasStyles, tw`py-3!`]}>
                <WrittenBySection />
            </section>
            <section css={[canvasStyles, tw``]}>
                <Giscus
                    category='General'
                    categoryId={process.env.NEXT_PUBLIC_CATEGORY_ID}
                    emitMetadata='0'
                    id='comments'
                    inputPosition='top'
                    lang='en'
                    loading='lazy'
                    mapping='pathname'
                    reactions-enabled='1'
                    repo='thegauravthakur/blog-comments'
                    repoId={process.env.NEXT_PUBLIC_REPO_ID as string}
                    theme='dark_tritanopia'
                />
            </section>
            <Footer />
        </>
    );
}

export async function getStaticProps(context: any) {
    const { slug } = context.params;
    const files = fs.readFileSync(
        path.join('src/content/posts', `${slug}.mdx`),
        'utf-8'
    );
    const imagePaths = readdirSync('public/images');

    const targetImage = imagePaths.find(
        (image) => image.split('.')[0] === slug
    );
    if (!targetImage) {
        throw new Error('No image found');
    }
    const { code, frontmatter } = await bundleMDX({ source: files });

    return {
        props: { code, frontmatter, targetImage }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync('src/content/posts', 'utf-8');
    return {
        fallback: false,
        paths: files.map((file) => {
            const [slug] = file.split('.');
            return { params: { slug } };
        }),
    };
}

export default Home;
