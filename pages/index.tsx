import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
/* import { useEffect, useState } from 'react'; */
import { Articles } from '../src/app/components/blog/articles';
import { Headline } from '../src/app/components/blog/headline';
import { Layout } from '../src/app/components/layout';
import { Techs } from '../src/app/components/techs';
/* import { TwitchLive } from '../src/app/components/twitch_live';
import { TwitchRepository } from '../src/infrastruture/repository/twitch';
import { io } from 'socket.io-client'; */

/* import { Layout } from '../src/app/components/layout';
import { Headline } from '../src/app/components/blog/headline';
import { Articles } from '../src/app/components/blog/articles';
import { Tutorial } from '../src/app/components/blog/tutorials'; */

export interface postData {
	objectID: string;
	subtitle: string;
	title: string;
	date: string;
	description: string;
	topic: string;
	type: string;
	toc: boolean;
	tags: string[];
	icon: string;
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('posts'));

	const listArticle = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		);

		let { data } = matter(markdownWithMeta);

		data.href = filename.replace('.md', '');

		return data;
	});

	const filterArticle = (type: string, articles: any) => {
		return articles
			.filter((item: any) => {
				return item.type === type;
			})
			.sort(function (a: postData, b: postData) {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			})
			.slice(0, 4)
			.map((i: any) => i);
	};

	return {
		props: {
			post: filterArticle('post', listArticle),
			tutorial: filterArticle('tutorial', listArticle),
			headline: listArticle[0],
		},
	};
}

export default function Home({ post, tutorial, headline }: any) {
	const head = {
		title: 'jscode 🤖 Junior & Senior Code',
		description: 'Tutoriales de programación',
	};

	return (
		<>
			<Layout {...head}>
				<Headline
					data={headline}
					coming_soon={true}
				/>
				<Techs />
				<Articles data={post} />
				{/* 	
				
				<Tutorial data={tutorial} /> */}
			</Layout>
		</>
	);
}
