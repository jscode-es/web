import { ItemCourse } from './item';
import style from './style.module.css';

export function Courses({ data }: any) {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.top}>
					<div>
						<h1>Últimos cursos</h1>
						<p>Conviértete de junior a senior con este contenido</p>
					</div>
					<div>
						{/* <button className={style.btn}>Mostrar todo</button> */}
					</div>
				</div>
				<div className={style.list}>
					{data.map((item: any) => {
						return (
							<ItemCourse
								item={item}
								key={item.objectID}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
