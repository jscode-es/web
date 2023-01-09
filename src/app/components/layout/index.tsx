import Head from 'next/head';
import { Navigation } from '../navigation';
import { Newsletter } from '../newsletter';
import style from './style.module.css';

export function Layout({ children, title, description }: any) {
	return (
		<>
			<Head>
				<title>{title.replace('<br>', ' ')}</title>
				<meta
					id='description'
					name='description'
					content={description.replace('<br>', ' ')}
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
					<div className={style.footer}>
						<div></div>
						<Newsletter />
						<div></div>
					</div>
				</main>
			</div>
		</>
	);
}
