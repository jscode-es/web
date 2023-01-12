import style from './style.module.css';

import {
	SiCypress,
	SiExpress,
	SiJavascript,
	SiJest,
	SiReact,
	SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export function Techs() {
	return (
		<div className={`${style.container} hide_mobile`}>
			<div className={style.content}>
				<div>
					<span className={style.title}>
						Crearemos conjuntamente proyectos con estas tecnologías
					</span>
				</div>
				<div className={style.icons}>
					<a
						href='https://www.typescriptlang.org/'
						target='_blank'
						rel='noopener noreferrer'>
						<SiTypescript />
					</a>
					<a
						href='https://expressjs.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<SiExpress />
					</a>

					<a
						href='https://nextjs.org/'
						target='_blank'
						rel='noopener noreferrer'>
						<TbBrandNextjs />
					</a>

					<a
						href='https://developer.mozilla.org/es/docs/Web/JavaScript'
						target='_blank'
						rel='noopener noreferrer'>
						<SiJavascript />
					</a>

					<a
						href='https://es.reactjs.org/'
						target='_blank'
						rel='noopener noreferrer'>
						<SiReact />
					</a>

					<a
						href='https://jestjs.io/'
						target='_blank'
						rel='noopener noreferrer'>
						<SiJest />
					</a>
					<a
						href='https://www.cypress.io/'
						target='_blank'
						rel='noopener noreferrer'>
						<SiCypress />
					</a>
				</div>
			</div>
		</div>
	);
}
