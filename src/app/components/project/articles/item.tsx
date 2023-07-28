import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from './style.module.css';

export function ItemProject({ item }: any) {
	const [src, setSrc] = useState(`/portrait/${item.href}.png`);

	return (
		<Link
			href={`/project/${item.href}`}
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
