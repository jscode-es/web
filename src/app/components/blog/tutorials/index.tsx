import style from './style.module.css';
import { ItemArticle } from './item';

export function Tutorial({ data }: any) {
	return (
		<div className={style.container}>
			<div className={style.top}>
				<div>
					<h1>Últimos tutoriales</h1>
					<p>Aprende de manera correcta</p>
				</div>
				<div>
					{/* <button className={style.btn}>Mostrar todo</button> */}
				</div>
			</div>
			<div className={style.content}>
				{data.map((item: any, index: number) => {
					return (
						<ItemArticle
							item={item}
							key={item.href}
						/>
					);
				})}
			</div>
		</div>
	);
}
