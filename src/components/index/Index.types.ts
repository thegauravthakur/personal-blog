export type MetaData = {
  title: string;
  publishedDate: string;
  author: string;
  description: string;
  tags: string;
};

export interface Post {
  slug: string;
  imagePath: string;
  metaData: MetaData;
}

export interface HomeProps {
  posts: Post[];
}
