import { Article } from './Index.types';

export const comparator = (articleA: Article, articleB: Article) => {
    const dateA = new Date(articleA.metaData.publishedDate);
    const dateB = new Date(articleB.metaData.publishedDate);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
};
