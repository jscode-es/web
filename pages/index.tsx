import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Layout } from '../src/app/components/layout';
import { Headline } from '../src/app/components/blog/headline';
import { Articles } from '../src/app/components/blog/articles';

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('posts'));

	const articles = files.slice(0, 3).map((i) => i);

	const listArticle = articles.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		);

		let { data } = matter(markdownWithMeta);

		data.href = filename.replace('.md', '');

		return data;
	});

	return {
		props: {
			listArticle,
		},
	};
}

export default function Home({ listArticle }: any) {
	const head = {
		title: 'jscode 🤖 Junior & Senior Code',
		description: 'Tutoriales de programación',
	};

	return (
		<>
			<Layout {...head}>
				<Headline data={listArticle.at(-1)} />
				<Articles data={listArticle} />
			</Layout>
		</>
	);
}
