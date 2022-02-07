import Head from 'next/head';
import React from 'react';

interface CustomHeadProperties {
    theme: string;
}
const CustomHead = ({ theme }: CustomHeadProperties) => {
    const favicon = theme === 'dark' ? '/darkFavicon.svg' : '/lightFavicon.svg';
    return (
        <Head>
            <link rel='icon' type='image/svg+xml' href={favicon} />
            <title>Gaurav's Blog</title>
        </Head>
    );
};

export default CustomHead;
