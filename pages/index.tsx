import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { useEffect, useState } from 'react';
import { Articles } from '../src/app/components/blog/articles';
import { Headline } from '../src/app/components/blog/headline';
import { Layout } from '../src/app/components/layout';
import { Techs } from '../src/app/components/techs';
import { TwitchLive } from '../src/app/components/twitch_live';
import { TwitchRepository } from '../src/infrastruture/repository/twitch';

/* import { Layout } from '../src/app/components/layout';
import { Headline } from '../src/app/components/blog/headline';
import { Articles } from '../src/app/components/blog/articles';
import { Tutorial } from '../src/app/components/blog/tutorials'; */

const twitch = new TwitchRepository();

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('posts'));

	/* const articles = files.slice(0, 3).map((i) => i); */

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
	const [isLive, setIsLive] = useState(false);

	const head = {
		title: 'jscode 🤖 Junior & Senior Code',
		description: 'Tutoriales de programación',
	};

	useEffect(() => {
		twitch.isLive().then(setIsLive);
	}, []);

	return (
		<>
			<Layout {...head}>
				{isLive && <TwitchLive />}
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
