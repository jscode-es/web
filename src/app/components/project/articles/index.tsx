import { ItemProject } from './item';
import style from './style.module.css';

export function Projects({ data }: any) {

	if (!data?.length) {
		return null;
	}

	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.top}>
					<div>
						<h1>Projecto Speack.me</h1>
						<p>El día a días de la plataforma de streaming</p>
					</div>
					<div>
						{/* <button className={style.btn}>Mostrar todo</button> */}
					</div>
				</div>
				<div className={style.list}>
					{data.map((item: any) => {
						return (
							<ItemProject
								item={item}
								key={item.href}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
