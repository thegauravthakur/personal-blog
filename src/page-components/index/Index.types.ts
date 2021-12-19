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

export interface HomeProps {
  articles: Article[];
}

export enum MetaValues {
  description = "Hi, welcome to my personal blog. I am a college student and a javascript enthusiast. In this blog, I'll share my knowledge related to various tech stack.",
}
