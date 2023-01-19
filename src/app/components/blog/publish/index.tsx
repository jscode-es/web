import style from './style.module.css';

import { MdOutlineContentCopy } from 'react-icons/md';
import { PublishNetwork } from './network';
import { useState } from 'react';

// https://wcoder.github.io/share-buttons/
// https://github.dev/wcoder/share-buttons

const formatDate = (date_post: string) => {
	const date = new Date(date_post);
	const monthNames = [
		'Ene',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	const format = `${day} ${monthNames[month]} ${year}`;

	return format;
};

export function Publish({ date }: any) {
	const [styleCopyInfo, setStyleCopyInfo] = useState('');

	const copyLink = () => {
		if (!navigator.clipboard) return;

		navigator.clipboard.writeText(location.href);

		setStyleCopyInfo(style.show);

		setTimeout(() => {
			setStyleCopyInfo('');
		}, 1000);
	};

	return (
		<div className={style.options}>
			<div>
				<div className={style.user_post}>
					<div>SG</div>
					<div>
						<h5>Sergio González</h5>
						<span>{formatDate(date)}</span>
					</div>
				</div>
			</div>
			<div className={style.share}>
				<button
					className={style.copy_btn}
					title='Copiar enlace'
					onClick={copyLink}>
					<MdOutlineContentCopy />
					<div className={`${style.copy} ${styleCopyInfo}`}>
						😊 Copiado
					</div>
				</button>
				<PublishNetwork client='twitter' />
				<PublishNetwork client='facebook' />
				<PublishNetwork client='linkedin' />
			</div>
		</div>
	);
}
