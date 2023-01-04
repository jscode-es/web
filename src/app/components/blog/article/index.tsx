import Link from 'next/link';
import style from './style.module.css';

export function Article({ data: { title, content } }: any) {
	return (
		<div className={style.container}>
			<div
				className={style.content}
				dangerouslySetInnerHTML={{ __html: content }}></div>
		</div>
	);
}
