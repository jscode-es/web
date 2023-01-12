import style from './style.module.css';

import { SiTwitch } from 'react-icons/si';

export function TwitchLive() {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.video}>
					<iframe
						src='https://player.twitch.tv/?channel=jscode_&amp;parent=jscode.es'
						width='320'
						height='200'
						scrolling='no'></iframe>
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
			{/* <div className={style.content}>
				<span>Is live</span>
				<h1 dangerouslySetInnerHTML={{ __html: '' }} />
				<p>hoalsa</p>

				<Link
					href='https://www.twitch.tv/midudev'
					className={style.btn}>
					<span>Ir al artículo</span>
				</Link>
			</div> */}
		</div>
	);
}
