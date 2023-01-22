import style from './style.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineWatchLater } from 'react-icons/md';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function ContentCourse({ data, content, slug, list }: any) {
	const [currentPath, setCurrentPath] = useState('');

	useEffect(() => {
		setCurrentPath(location.pathname.replace('/curso/', ''));
	}, [slug]);

	const CheckComplete = ({ isComplete }: { isComplete: boolean }) => {
		return (
			<FaCheckCircle
				className={isComplete ? style.complete : style.incomplete}
			/>
		);
	};

	return (
		<div className={style.container}>
			<div className={style.content_block}>
				<div className={style.video}>
					<video controls>
						<source
							src={data.video}
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>
				<div
					className={style.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
			<aside className={style.aside}>
				<div className={style.navigation}>
					<div className={style.description}>
						<h2 className={style.title}>
							Crear una app de notas en React y Vite
						</h2>
						<small className={style.time}>
							<MdOutlineWatchLater /> Tiempo total: 54 min
						</small>
					</div>
					<ul className={style.list}>
						{list.map(({ data, url }: any) => {
							return (
								<Link
									key={data.objectID}
									href={url}
									className={
										currentPath === url ? style.select : ''
									}>
									<div>
										<h4>{data.title}</h4>
										<small>{data.subtitle}</small>
										<span className={style.time}>
											<MdOutlineWatchLater />{' '}
											{data.video_size}
										</span>
									</div>

									<div className={style.status}>
										<CheckComplete isComplete={true} />
										<BsThreeDots />
									</div>
								</Link>
							);
						})}
					</ul>
				</div>
			</aside>
		</div>
	);
}
