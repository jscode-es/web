import Link from 'next/link';
import style from './style.module.css';

export function Headline() {
	return (
		<div className={style.container}>
			<span>React y arquitectura hexágonal</span>
			<h1>Desarrolla una aplicación con la mejores prácticas</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
				similique, veniam expedita suscipit temporibus quaerat ullam
				quia sequi laborum fuga exercitationem laudantium, tempora illum
				reiciendis perferendis minima, magnam ad? Quae.
			</p>
			<Link
				href={'/react_y_arquitectura_hexagonal'}
				className={style.btn}>
				<span>Ir al artículo</span>
			</Link>
		</div>
	);
}
