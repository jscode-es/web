import Link from 'next/link';
import style from './style.module.css';
import { faker } from '@faker-js/faker';

export function Articles() {
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
				<Link
					href='#'
					className={style.link}>
					<div className={style.image}></div>
					<span>{faker.lorem.words()}</span>
					<h2>{faker.lorem.sentences(1)}</h2>
					<p>{faker.lorem.sentences(2)}</p>
				</Link>
				<Link
					href='#'
					className={style.link}>
					<div className={style.image}></div>
					<span>{faker.lorem.words()}</span>
					<h2>{faker.lorem.sentences(1)}</h2>
					<p>{faker.lorem.sentences(2)}</p>
				</Link>
				<Link
					href='#'
					className={style.link}>
					<div className={style.image}></div>
					<span>{faker.lorem.words()}</span>
					<h2>{faker.lorem.sentences(1)}</h2>
					<p>{faker.lorem.sentences(2)}</p>
				</Link>
			</div>
		</div>
	);
}
