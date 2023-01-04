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
						/>
					</Link>
				</div>
				<div>
					<Search />
				</div>
				<div className={style.btns}>
					<div>buton</div>
				</div>
			</div>
		</div>
	);
}
