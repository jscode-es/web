import Link from 'next/link';
import { Search } from '../search';
import style from './style.module.css';

export function Navigation() {
	return (
		<div className={style.container}>
			<div className={style.bg}></div>
			<div className={style.content}>
				<div>
					<Link href='/'>
						<img
							src='/jscode-logo.png'
							className={style.logo}
							alt='JSCode'
						/>
					</Link>
				</div>
				<div>
					<Search />
				</div>
				<div className={style.btns}>
					<div></div>
				</div>
			</div>
		</div>
	);
}
