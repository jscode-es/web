import Link from 'next/link';
import style from './style.module.css';
import Image from 'next/image';
import { useState } from 'react';

export function ItemArticle({ item }: any) {
	const [src, setSrc] = useState(`/portrait/${item.href}.png`);

	return (
		<Link
			href={`/${item.href}`}
			className={style.link}>
			<div className={style.image}>
				<Image
					src={src}
					alt={item.description}
					layout='fill'
					placeholder='blur'
					blurDataURL='/assets/empty.png'
					onError={() => setSrc('/assets/empty.png')}
				/>
			</div>
			<span>{item.subtitle}</span>
			<h2 dangerouslySetInnerHTML={{ __html: item.title }} />
			<p>{item.description}</p>
		</Link>
	);
}
