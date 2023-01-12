import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';

import { BsGithub, BsInstagram, BsTwitch, BsYoutube } from 'react-icons/bs';
import { Search } from '../search';

export function Navigation() {
	return (
		<div className={style.container}>
			<div className={style.bg}></div>
			<div className={style.content}>
				<div>
					<Link href='/'>
						<Image
							src='/jscode-logo.png'
							alt='JSCode'
							width={50}
							height={50}
						/>
					</Link>
				</div>
				<div className={style.hide_mobile}>
					<Search />
				</div>
				<div className={style.group}>
					<a
						href='https://www.twitch.tv/jscode_'
						target='_blank'
						rel='noopener noreferrer'>
						<BsTwitch />
					</a>
					<a
						href='https://www.youtube.com/channel/UCXLcSZzqpRzQ-FplONzCrMw'
						target='_blank'
						rel='noopener noreferrer'>
						<BsYoutube />
					</a>
					<a
						href='https://www.instagram.com/jscode_es/'
						target='_blank'
						rel='noopener noreferrer'>
						<BsInstagram />
					</a>
					<a
						href='https://github.com/jscode-es'
						target='_blank'
						rel='noopener noreferrer'>
						<BsGithub />
					</a>
				</div>
			</div>
		</div>
	);
}
