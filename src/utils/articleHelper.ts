import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { Article, MetaData } from '../pages';

export function getAllArticles() {
    const articles: Article[] = [];
    const filePaths = readdirSync('src/content/posts');

    for (const filePath of filePaths) {
        const [fileName] = filePath.split('.');
        const file = readFileSync(
            path.join('src/content/posts', filePath),
            'utf-8'
        );
        const { data: metaData } = matter(file) as unknown as {
            data: MetaData;
        };
        const imagePaths = readdirSync('public/images');
        const targetImage = imagePaths.find(
            (image) => image.split('.')[0] === fileName
        );
        if (!targetImage) throw new Error('No image found');
        articles.push({
            slug: fileName,
            imagePath: targetImage,
            metaData,
        });
    }
    return articles;
}

export function createRange(length: number) {
    return Array.from({ length }, (x, i) => i);
}
