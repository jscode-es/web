import Link from 'next/link';
import style from './style.module.css';
import { faker } from '@faker-js/faker';

export function Articles({ data }: any) {
	return (
		<div className={style.container}>
			<div className={style.top}>
				<div>
					<h1>Relead content</h1>
					<p>
						Grepudiandae veritatis at quos, sint perspiciatis quam.
						Nam quos culpa voluptas.
					</p>
				</div>
				<div>
					<button className={style.btn}>View All</button>
				</div>
			</div>
			<div className={style.content}>
				{data.map((item: any, index: number) => {
					return (
						<Link
							key={index}
							href={`/${item.href}`}
							className={style.link}>
							<div className={style.image}></div>
							<span>{item.subtitle}</span>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
