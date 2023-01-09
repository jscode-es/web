import { useState } from 'react';
import { NewsletterRepository } from '../../../infrastruture/repository/newsletter';
import style from './style.module.css';

export function Newsletter() {
	const defaultBtnText = 'Suscríbete';

	const [email, setEmail] = useState('');
	const [btnText, setBntText] = useState(defaultBtnText);
	const [successStyle, setSuccesStyle] = useState('');

	const handlerChange = ({ value }: any) => setEmail(value);

	const save = () => {
		const sentToEmail = new NewsletterRepository({ email });

		setEmail('');

		if (!sentToEmail.validateEmail()) return;

		setBntText('👍Gracias por la sub');
		setSuccesStyle(style.success);

		sentToEmail.send();

		setTimeout(() => {
			setBntText(defaultBtnText);
			setSuccesStyle('');
		}, 2000);
	};

	return (
		<div className={style.container}>
			<div>
				<h4>Suscríbete a la alerta del canal</h4>
				<p>
					Mantente al día con las últimas noticias, anuncios y
					artículos
				</p>
			</div>
			<div>
				<input
					type='text'
					placeholder='Introduce tu email'
					value={email}
					onChange={({ target }) => handlerChange(target)}
				/>
				<button
					onClick={save}
					className={successStyle}>
					{btnText}
				</button>
			</div>
		</div>
	);
}
