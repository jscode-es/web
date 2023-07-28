import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Navigation } from '../navigation';
import { TwitchLive } from '../twitch_live';

import { TwitchRepository } from '../../../infrastruture/repository/twitch';
/*
import { Newsletter } from '../newsletter'; */
import { useSocket } from '../../context/socket';
import { LinkTo } from '../link';
import style from './style.module.css';

const twitch = new TwitchRepository();

interface twitchStatus {
	online: boolean;
}

export function Layout({ children, title, description }: any) {
	const [isLive, setIsLive] = useState(false);
	const { socket } = useSocket();

	useEffect(() => {
		twitch.isLive(String(process.env.NEXT_PUBLIC_SOCKET)).then(setIsLive);

		if (!socket) return;

		socket.on('twitch_status', ({ online }: twitchStatus) =>
			setIsLive(online)
		);

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
							<LinkTo
								href='mailto:sgonzalez@jscode.es?subject=Estoy%20interesado%20de%20su%20conocimientos%20en%20NodeJS&body=%0D%0A%0D%0AEste%20mensaje%20se%20redact%C3%B3%20desde%20JSCode.es'
								text='Contacto'
							/>
							<LinkTo
								href='https://www.twitch.tv/jscode_'
								text='Twitch'
							/>
							<LinkTo
								href='https://www.youtube.com/channel/UCXLcSZzqpRzQ-FplONzCrMw'
								text='Youtube'
							/>
							<LinkTo
								href='https://www.instagram.com/jscode_es/'
								text='Instagram'
							/>
							<LinkTo
								href='https://github.com/jscode-es'
								text='Github'
							/>
						</div>
						{/* <Newsletter /> */}
						<div></div>
					</div>
				</main>
			</div>
		</>
	);
}
