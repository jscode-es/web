import style from './style.module.css';

import { MdOutlineContentCopy } from 'react-icons/md';
import { PublishNetwork } from './network';
import { useState } from 'react';

// https://wcoder.github.io/share-buttons/
// https://github.dev/wcoder/share-buttons

export function Publish({ data }: any) {
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
						<span>20 Jan 2022</span>
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
