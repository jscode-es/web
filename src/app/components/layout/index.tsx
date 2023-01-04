import Head from 'next/head';
import { Navigation } from '../navigation';
import style from './style.module.css';

export function Layout({ children, title, description }: any) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name='description'
					content={description}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div className={style.container}>
				<main className={style.main}>
					<Navigation />
					<div className={style.content}>{children}</div>
				</main>
			</div>
		</>
	);
}
