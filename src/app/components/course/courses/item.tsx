import Link from 'next/link';
import style from './style.module.css';
import Image from 'next/image';
import { useState } from 'react';

export function ItemCourse({ item }: any) {
	const [src, setSrc] = useState(`/portrait/${item.href}.png`);

	const Content = () => {
		return (
			<>
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
				{item.status !== 'ok' && (
					<span className={style.coming_soon}>Próximamente</span>
				)}
			</>
		);
	};

	return (
		<>
			{item.status === 'ok' && (
				<Link
					href={`/curso/${item.href}-${item.main}`}
					className={style.link}>
					<Content />
				</Link>
			)}

			{item.status !== 'ok' && (
				<div className={style.nolink}>
					<Content />
				</div>
			)}
		</>
	);
}

{
	/* <Link
			href={`/curso/${item.href}-${item.main}`}
			className={style.link}>
			<Content />
		</Link> */
}
