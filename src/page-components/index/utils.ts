import { Post } from './Index.types';

export const comparator = (post1: Post, post2: Post) => {
  const date1 = new Date(post1.metaData.publishedDate);
  const date2 = new Date(post2.metaData.publishedDate);
  if (date1 < date2) return 1;
  if (date1 > date2) return -1;
  return 0;
};
