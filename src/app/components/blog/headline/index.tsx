import Link from 'next/link';
import style from './style.module.css';

export function Headline({ data }: any) {
	return (
		<div className={style.container}>
			<span>{data.subtitle}</span>
			<h1>{data.title}</h1>
			<p>{data.description}</p>
			<Link
				href={`/${data.href}`}
				className={style.btn}>
				<span>Ir al artículo</span>
			</Link>
		</div>
	);
}
