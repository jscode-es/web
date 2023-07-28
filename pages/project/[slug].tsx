import fs from 'fs';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import { marked } from 'marked';
import path from 'path';

import { useEffect } from 'react';
import { Article } from '../../src/app/components/blog/article';
import { Layout } from '../../src/app/components/layout';
import { CopyPasteCode } from '../../src/domain/copy_paste_code';

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join(__dirname,'../../../../','data/projects'));

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
	const filePath = path.join(__dirname,'../../../../','data/projects', slug + '.md');
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
	frontmatter: {
		title,
		date,
		subtitle,
		description,
		cover_image,
		icon,
		tags,
	},
	slug,
	content,
}: any) {
	const head = {
		title,
		description,
		tags,
	};

	useEffect(() => {
		hljs.highlightAll();
		hljs.addPlugin(new CopyPasteCode());
	}, [slug]);

	return (
		<>
			<Layout {...head}>
				<Article
					data={{
						title,
						subtitle,
						tags,
						date,
						cover_image,
						description,
						content: marked(content),
						slug,
						icon,
					}}
				/>
			</Layout>
		</>
	);
}
