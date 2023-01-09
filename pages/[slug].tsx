import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import hljs from 'highlight.js';

import { Layout } from '../src/app/components/layout';
import { useEffect } from 'react';
import { Article } from '../src/app/components/blog/article';
import { CopyPasteCode } from '../src/domain/copy_paste_code';

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
	const filePath = path.join('posts', slug + '.md');
	const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
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
	frontmatter: { title, date, subtitle, description, cover_image },
	slug,
	content,
}: any) {
	const head = {
		title,
		description,
	};

	useEffect(() => {
		hljs.highlightAll();
		hljs.addPlugin(new CopyPasteCode());
	}, []);

	return (
		<>
			<Layout {...head}>
				<Article
					data={{
						title,
						subtitle,
						date,
						cover_image,
						content: marked(content),
						slug,
					}}
				/>
			</Layout>
		</>
	);
}
