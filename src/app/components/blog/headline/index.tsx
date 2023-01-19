import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from './style.module.css';

export function Headline({ data, coming_soon }: any) {
	const [src, setSrc] = useState(`/portrait/${data.href}.png`);

	return (
		<div className={style.container}>
			<div className={style.image}>
				<Image
					src={src}
					alt={data.description}
					layout='fill'
					placeholder='blur'
					blurDataURL='/assets/empty.png'
					onError={() => setSrc('/assets/empty.png')}
				/>
			</div>
			<div className={style.content}>
				<span>{data.subtitle}</span>
				<h1 dangerouslySetInnerHTML={{ __html: data.title }} />
				<p>{data.description}</p>
				{coming_soon ? (
					<button
						className={style.coming_soon}
						disabled>
						Próximamente
					</button>
				) : (
					<Link
						href={`/${data.href}`}
						className={style.btn}>
						<span>Ir al artículo</span>
					</Link>
				)}
			</div>
		</div>
	);
}
