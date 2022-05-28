import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

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
        `https://blog.gauravthakur.in${router.asPath}` === '/'
            ? ''
            : router.asPath;
    const title = metaTitle ?? "Gaurav's Blog";
    return (
        <Head>
            <title>{title}</title>
            <link href={favicon} rel='icon' type='image/svg+xml' />
            <meta content={metaDescription} name='description' />
            <meta content={title} property='og:title' />
            <meta content={metaDescription} property='og:description' />
            <meta content='website' property='og:type' />
            <meta
                content={`https://blog.gauravthakur.in${ogImage}`}
                property='og:image'
            />
            <meta content={ogImageAlt} property='og:image:alt' />
            <meta content="Gaurav's Blog" property='og:site_name' />
            <meta content='3200' property='og:image:width' />
            <meta content='1800' property='og:image:height' />
            <meta content={currentUrl} property='og:url' />
            {/* twitter start */}
            <meta content='summary_large_image' name='twitter:card' />
            <meta content='@gauravcodes' name='twitter:creator' />
            <meta content={title} name='twitter:title' />
            <meta content={MetaValues.description} name='twitter:description' />
            <meta
                content={`https://blog.gauravthakur.in${ogImage}`}
                name='twitter:image'
            />
            <meta content={currentUrl} property='twitter:url' />
            <meta content={ogImageAlt} name='twitter:image:alt' />
            {/* twitter end */}
            <link
                href={`https://blog.gauravthakur.in${currentUrl}`}
                rel='canonical'
            />
        </Head>
    );
};
