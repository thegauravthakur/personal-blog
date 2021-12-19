import React from 'react';
import Head from 'next/head';

interface CustomHeadProps {
  theme: string;
}
const CustomHead = ({ theme }: CustomHeadProps) => {
  const favicon = theme === 'dark' ? '/darkFavicon.svg' : '/lightFavicon.svg';
  return (
    <Head>
      <link rel='icon' type='image/svg+xml' href={favicon} />
      <title>Gaurav's Blog</title>
    </Head>
  );
};

export default CustomHead;
