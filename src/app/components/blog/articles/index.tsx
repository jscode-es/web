import { ItemArticle } from './item';
import style from './style.module.css';

export function Articles({ data }: any) {
	
	if (!data?.length) {
		return null;
	}


	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.top}>
					<div>
						<h1>Últimos artículos</h1>
						<p>Ponte al día sobre NodeJS</p>
					</div>
					<div>
						{/* <button className={style.btn}>Mostrar todo</button> */}
					</div>
				</div>
				<div className={style.list}>
					{data.map((item: any) => {
						return (
							<ItemArticle
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
