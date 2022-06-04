import tw from 'twin.macro';

import { BlogPost } from '../components/BlogPost';
import { CustomHead } from '../components/CustomHead';
import { Footer } from '../components/Footer';
import { backgroundStyle, textStyle } from '../styles/GlobalStyles';
import { getAllArticles } from '../utils/articleHelper';
import { Pagination } from '../components/Pagination';

export type MetaData = {
    title: string;
    publishedDate: string;
    author: string;
    description: string;
    tags: string;
};

export interface Article {
    slug: string;
    imagePath: string;
    metaData: MetaData;
}

export interface HomeProperties {
    articles: Article[];
    totalPages: number;
}

export const comparator = (articleA: Article, articleB: Article) => {
    const dateA = new Date(articleA.metaData.publishedDate);
    const dateB = new Date(articleB.metaData.publishedDate);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
};

function Home({ articles, totalPages }: HomeProperties) {
    return (
        <>
            <CustomHead
                metaDescription={
                    "Hi, welcome to my personal blog. I am a college student and a JavaScript enthusiast. In this blog, I'll share my knowledge related to various tech stack."
                }
                metaTitle={"Gaurav's Blog"}
                ogImage='/images/og-default.png'
                ogImageAlt={"Banner Image for Gaurav's Blog"}
            />
            <div
                css={[
                    textStyle,
                    tw`flex flex-col items-center my-6 md:my-8 lg:my-10 mx-auto`,
                ]}
            >
                <main
                    css={[
                        backgroundStyle,
                        tw`flex-1 rounded-lg max-w-6xl mx-0 py-10 px-5 my-7 md:(mx-5 px-5) lg:(m-7 p-10)`,
                    ]}
                >
                    {articles.map(
                        ({ slug, metaData, imagePath }: Article, index) => (
                            <BlogPost
                                key={slug}
                                data={metaData}
                                imagePath={imagePath}
                                isLast={index === articles.length - 1}
                                slug={slug}
                            />
                        )
                    )}
                </main>
                <Pagination currentPage={1} totalPages={totalPages} />
            </div>
            <Footer />
        </>
    );
}

export default Home;

export async function getStaticProps() {
    const articles = getAllArticles();

    return {
        props: {
            articles: articles.sort(comparator).slice(0, 1),
            totalPages: Math.ceil(articles.length / 5),
        },
    };
}
