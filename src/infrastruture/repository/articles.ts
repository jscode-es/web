import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { ArticleData, Articles, GetData } from '../interfaces/articles';

export class ArticlesRepository implements Articles {
	private files: string[];

	constructor() {
		this.files = fs.readdirSync(path.join('data/posts'));
	}

	get(arg?: GetData) {
		const limit = arg?.limit || 4;

		const listArticle = this.files.map((filename) => {
			const markdownWithMeta = fs.readFileSync(
				path.join('data/posts', filename),
				'utf-8'
			);

			let { data } = matter(markdownWithMeta);

			data.href = filename.replace('.md', '');

			return data;
		});

		const list = listArticle
			.sort((a, b) => this.getTime(b.date) - this.getTime(a.date))
			.slice(0, limit) as ArticleData[];

		return list;
	}

	getTime(date: string) {
		return new Date(date).getTime();
	}
}
