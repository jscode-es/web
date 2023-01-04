import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import { Layout } from '../src/app/components/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Article } from '../src/app/components/blog/article';

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }: any) {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', slug + '.md'),
		'utf-8'
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}

export default function Blog({
	frontmatter: { title, date, cover_image },
	slug,
	content,
}: any) {
	const head = {
		title,
		description: 'Tutoriales de programación',
	};

	return (
		<>
			<Layout {...head}>
				<Article
					data={{
						title,
						date,
						cover_image,
						content: marked(content),
					}}
				/>
			</Layout>
		</>
	);
}
