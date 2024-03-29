import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from './style.module.css';

export function Headline({ data }: any) {
	const [src, setSrc] = useState(`/portrait/${data.href}.png`);

	return (
		<div className={style.container}>
			<div className={style.image}>
				{data?.video ? <video className={style.video} src={`/video/${data.href}.mp4`} autoPlay muted loop />: <Image
					src={src}
					alt={data.description}
					layout='fill'
					placeholder='blur'
					blurDataURL='/assets/empty.png'
					onError={() => setSrc('/assets/empty.png')}
				/>}
			</div>
			<div className={style.content}>
				<span>{data.subtitle}</span>
				<h1 dangerouslySetInnerHTML={{ __html: data.title }} />
				<p>{data.description}</p>
				{data.coming_soon ? (
					<button
						className={style.coming_soon}
						disabled>
						Próximamente
					</button>
				) : (
					<Link
						href={`${data?.base_url ?? ''}/${data.href}`}
						className={style.btn}>
						<span>Ir al artículo</span>
					</Link>
				)}
			</div>
		</div>
	);
}
