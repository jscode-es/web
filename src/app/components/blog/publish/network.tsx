import * as icons from 'react-icons/fa';
import { useEffect, useState } from 'react';

const social = {
	twitter: {
		url: 'https://twitter.com/intent/tweet?url={0}&text=JSCode Hay un articulo interesante sobre: {1}',
		icon: 'FaTwitterSquare',
	},
	facebook: {
		url: 'https://www.facebook.com/sharer/sharer.php?u={0}&quote={1}',
		icon: 'FaFacebookSquare',
	},
	linkedin: {
		url: 'https://www.linkedin.com/shareArticle?mini=true&url={0}&title={1}&summary={1}&source={0}',
		icon: 'FaLinkedin',
	},
};

const stringFormat = function (str: string, args: string[]) {
	return str.replace(/\{(\d+)\}/g, function (m, n) {
		return args[n] || m;
	});
};

const popupCenter = function (url: string) {
	const w = window;
	const d = w.document;

	let _w = 600,
		_h = 400,
		dualScreenLeft =
			typeof w.screenLeft !== 'undefined'
				? w.screenLeft
				: (screen as any).left,
		dualScreenTop =
			typeof w.screenTop !== 'undefined'
				? w.screenTop
				: (screen as any).top,
		width = w.innerWidth || d.documentElement.clientWidth || screen.width,
		height =
			w.innerHeight || d.documentElement.clientHeight || screen.height,
		left = width / 2 - _w / 2 + dualScreenLeft,
		top = height / 3 - _h / 3 + dualScreenTop,
		windowFormat =
			'resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width={0},height={1},top={2},left={3}',
		newWindow = w.open(
			url,
			'',
			stringFormat(windowFormat, [_w, _h, top, left])
		);

	if (newWindow !== null && newWindow.focus) {
		newWindow.focus();
	}
};

export function PublishNetwork({ client }: any) {
	const iconName = (social as any)[client].icon;
	const Icon = (icons as any)[iconName];

	const [href, setHref] = useState('');

	useEffect(() => {
		const about = document.getElementById('description') as HTMLMetaElement;
		const content = about.getAttribute('content') ?? '';
		const href = 'https://jscode.es';
		const url = stringFormat((social as any)[client].url, [href, content]);

		setHref(new URL(url).href);
	}, []);

	return (
		<button
			onClick={() => {
				popupCenter(href);
			}}>
			<Icon />
		</button>
	);
}
