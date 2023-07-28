import fs from 'fs';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import { marked } from 'marked';
import path from 'path';

import { useEffect } from 'react';
import { LayoutCourse } from '../../src/app/components/course';
import { ContentCourse } from '../../src/app/components/course/content';
import { CopyPasteCode } from '../../src/domain/copy_paste_code';
import { CourseRepository } from '../../src/infrastruture/repository/courses';

export async function getStaticPaths() {
	return {
		paths: new CourseRepository().getPaths(),
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }: any) {
	const [course, part] = slug.split('-');
	const coursePath = path.join('data/courses', course);
	const filePath = path.join('data/courses', course, part + '.md');
	const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(markdownWithMeta);
	const parts = fs
		.readdirSync(coursePath)
		.filter((a) => a !== 'setting.json');

	const list = parts
		.map((filename) => {
			const coursePath = path.join('data/courses', course, filename);
			const markdownWithMeta = fs.readFileSync(coursePath, 'utf-8');
			const { data } = matter(markdownWithMeta);
			return {
				data,
				url: `${course}-${filename}`.replace('.md', ''),
			};
		})
		.sort((a: any, b: any) => a.data.position - b.data.position);

	return {
		props: {
			list,
			data,
			slug,
			content,
		},
	};
}

export default function Course({ data, slug, content, list }: any) {
	const head = {
		title: 'Curso exemplo',
		description: 'curso',
		tags: 'curso',
	};

	useEffect(() => {
		hljs.highlightAll();
		hljs.addPlugin(new CopyPasteCode());
	}, [slug]);

	return (
		<>
			<LayoutCourse {...head}>
				<ContentCourse
					data={data}
					content={marked(content)}
					slug={slug}
					list={list}
				/>
			</LayoutCourse>
		</>
	);
}
