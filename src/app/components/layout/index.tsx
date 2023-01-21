import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { Navigation } from '../navigation';
import { TwitchLive } from '../twitch_live';

import { TwitchRepository } from '../../../infrastruture/repository/twitch';
/*
import { Newsletter } from '../newsletter'; */
import style from './style.module.css';
import { useSocket } from '../../context/socket';

const twitch = new TwitchRepository();

export function Layout({ children, title, description }: any) {
	const [isLive, setIsLive] = useState(false);
	const { socket } = useSocket();

	useEffect(() => {
		twitch.isLive(String(process.env.NEXT_PUBLIC_SOCKET)).then(setIsLive);

		if (!socket) return;

		socket.on('twitch_status', ({ online }: { online: boolean }) => {
			console.log('LLEGA?');
			setIsLive(online);
		});

		return () => {
			socket.off('twitch_status');
		};
	}, [socket]);

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
					<TwitchLive online={isLive} />
					<Navigation />
					<div className={style.content}>{children}</div>
					<div className={style.footer}>
						<div></div>
						<div className={style.social}>
							<a href=''>Contacto</a>
							<a
								href='https://www.twitch.tv/jscode_'
								target='_blank'
								rel='noreferrer'>
								Twitch
							</a>
							<a
								href='https://www.youtube.com/channel/UCXLcSZzqpRzQ-FplONzCrMw'
								target='_blank'
								rel='noreferrer'>
								Youtube
							</a>
							<a
								href='https://www.instagram.com/jscode_es/'
								target='_blank'
								rel='noreferrer'>
								Instagram
							</a>
							<a
								href='https://github.com/jscode-es'
								target='_blank'
								rel='noreferrer'>
								Github
							</a>
						</div>
						{/* <Newsletter /> */}
						<div></div>
					</div>
				</main>
			</div>
		</>
	);
}
