import style from './style.module.css';
import { Publish } from '../publish';
import Image from 'next/image';
import { useState } from 'react';

export function Article({
	data: { title, subtitle, description, content, slug },
}: any) {
	const [src, setSrc] = useState(`/portrait/${slug}.png`);

	return (
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
			<Publish />
			<div
				className={style.content}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			<Publish />
		</div>
	);
}
