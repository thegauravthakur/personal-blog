import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import { Constant } from '../../page-components/shared/utils';
import { ThemeContext } from '../../styles/theme';

interface CustomHeadProperties {
    metaDescription: string;
    metaTitle: string;
    ogImage: string;
    ogImageAlt: string;
}

const MetaValues = {
    description:
        "Hi, welcome to my personal blog. I am a college student and a JavaScript enthusiast. In this blog, I'll share my knowledge related to various tech stack.",
    title: "Gaurav's Blog",
} as const;

export const CustomHead = ({
    ogImage,
    ogImageAlt,
    metaDescription,
    metaTitle,
}: CustomHeadProperties) => {
    const router = useRouter();
    const { theme } = useContext(ThemeContext);
    const favicon = theme === 'dark' ? '/darkFavicon.svg' : '/lightFavicon.svg';
    const currentUrl =
        Constant.url + router.asPath === '/' ? '' : router.asPath;
    const title = metaTitle ?? "Gaurav's Blog";
    return (
        <Head>
            <title>{title}</title>
            <link rel='icon' type='image/svg+xml' href={favicon} />
            <meta name='description' content={metaDescription} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={metaDescription} />
            <meta property='og:type' content='website' />
            <meta property='og:image' content={Constant.url + ogImage} />
            <meta property='og:image:alt' content={ogImageAlt} />
            <meta property='og:site_name' content="Gaurav's Blog" />
            <meta property='og:image:width' content='3200' />
            <meta property='og:image:height' content='1800' />
            <meta property='og:url' content={currentUrl} />
            {/* twitter start */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content='@gauravcodes' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={MetaValues.description} />
            <meta name='twitter:image' content={Constant.url + ogImage} />
            <meta property='twitter:url' content={currentUrl} />
            <meta name='twitter:image:alt' content={ogImageAlt} />
            {/* twitter end */}
            <link rel='canonical' href={Constant.url + currentUrl} />
        </Head>
    );
};
