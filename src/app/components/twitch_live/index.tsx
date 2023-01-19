import style from './style.module.css';

import { SiTwitch } from 'react-icons/si';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export function TwitchLive({ online }: { online: boolean }) {
	const [showContainer, setShowContainer] = useState('');

	const close = () => setShowContainer('');

	useEffect(() => {
		setShowContainer(online ? style.show : '');
	}, [online]);

	return (
		<div className={`${style.container} ${showContainer}`}>
			<div className={style.content}>
				<button
					className={style.close}
					onClick={close}>
					<IoClose />
				</button>
				<div className={style.video}>
					{online && (
						<iframe
							src='https://player.twitch.tv/?channel=jscode_&parent=jscode.es'
							width='320'
							height='200'
							scrolling='no'></iframe>
					)}
				</div>
				<div className={style.info}>
					<span>En directo</span>
					<h1>¡Estamos en directo en Twitch!</h1>
					<p>
						Aprende o mejora tu lenguaje de programación con el
						contenido del directo de hoy. Te espero, y recuerda que
						no te de miedo a preguntar.
					</p>
					<a
						href='https://www.twitch.tv/jscode_'
						target='_blank'
						rel='noreferrer'>
						<SiTwitch />
						Entra para poder participar
					</a>
				</div>
			</div>
		</div>
	);
}
