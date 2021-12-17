import React from 'react';
import { MetaValues } from '../../index/Index.types';
import { Constant } from '../utils';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface CustomHeadProps {
  metaDescription: string;
  metaTitle: string;
  ogImage: string;
  ogImageAlt: string;
}
const CustomHead = ({
  ogImage,
  ogImageAlt,
  metaDescription,
  metaTitle,
}: CustomHeadProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>Gaurav's Blog</title>
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={Constant.url + ogImage} />
      <meta property='og:image:alt' content={ogImageAlt} />
      <meta property='og:image:width' content='3200' />
      <meta property='og:image:height' content='1800' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@gauravcodes' />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={MetaValues.description} />
      <meta name='twitter:image' content={Constant.url + ogImage} />
      <link
        rel='canonical'
        href={`https://blog.gauravthakur.in${
          router.asPath === '/' ? '' : router.asPath
        }`}
      />
    </Head>
  );
};

export default CustomHead;
