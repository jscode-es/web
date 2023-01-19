import style from './style.module.css';
import { Publish } from '../publish';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export function Article({
	data: { title, subtitle, description, content, slug, tags, date },
}: any) {
	const [src, setSrc] = useState(`/portrait/${slug}.png`);

	useEffect(() => {
		setSrc(`/portrait/${slug}.png`);
	}, [slug]);

	return (
		<>
			<Head>
				<meta
					property='og:type'
					content='article'
				/>
				<meta
					property='og:title'
					content={title.replace(/<br>/g, ' ')}
				/>
				<meta
					name='keywords'
					content={tags.join(', ')}
				/>
				<meta
					property='og:description'
					content={description}
				/>
				<meta
					property='og:image'
					content={`https://jscode.es/${src}`}
				/>
				<meta
					property='og:url'
					content={`https://jscode.es/${slug}`}
				/>
				<meta
					property='og:site_name'
					content='JSCode'
				/>
			</Head>
			<div className={style.container}>
				<div className={style.headline}>
					<h3>{subtitle}</h3>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
					<div className={style.portrait}>
						<Image
							src={src}
							alt={description}
							layout='fill'
							blurDataURL='/assets/empty.png'
							placeholder='blur'
							onError={() => setSrc('/assets/empty.png')}
						/>
					</div>
				</div>
				<Publish date={date} />
				<div
					className={style.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
				<Publish date={date} />
			</div>
		</>
	);
}
