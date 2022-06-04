import fs from 'node:fs';
import { createRange, getAllArticles } from '../../utils/articleHelper';
import { Article, comparator } from '../index';
import { CustomHead } from '../../components/CustomHead';
import { backgroundStyle, textStyle } from '../../styles/GlobalStyles';
import tw from 'twin.macro';
import { BlogPost } from '../../components/BlogPost';
import { Footer } from '../../components/Footer';
import { useRouter } from 'next/router';
import { Pagination } from '../../components/Pagination';

interface HomeWithPaginationProps {
    articles: Article[];
    totalPages: string;
    pageIndex: string;
}
export default function HomeWithPagination({
    articles,
    totalPages,
    pageIndex,
}: HomeWithPaginationProps) {
    console.log(totalPages, pageIndex);
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
                <Pagination currentPage={pageIndex} totalPages={totalPages} />
            </div>
            <Footer />
        </>
    );
}

export async function getStaticProps(context: any) {
    const { pageIndex } = context.params;
    const articles = getAllArticles().sort(comparator);
    const totalPages = String(Math.ceil(articles.length / 5)); // article per page

    if (Number(pageIndex) === 1)
        return {
            redirect: {
                source: '/page/1',
                destination: '/',
            },
        };

    return {
        props: {
            pageIndex,
            articles: articles.slice(5 * (pageIndex - 1), pageIndex * 5),
            totalPages,
        },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync('src/content/posts', 'utf-8');
    const possiblePages = Math.ceil(files.length / 5); // article per page
    const range = createRange(possiblePages).map((i) => String(i + 1));

    return {
        fallback: false,
        paths: range.map((pageIndex) => {
            return { params: { pageIndex } };
        }),
    };
}
