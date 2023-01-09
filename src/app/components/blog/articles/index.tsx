import Link from 'next/link';
import style from './style.module.css';
import Image from 'next/image';
import { ItemArticle } from './item';

export function Articles({ data }: any) {
	return (
		<div className={style.container}>
			<div className={style.top}>
				<div>
					<h1>Últimos artículos</h1>
					<p>Conviértete de junior a senior con este contenido</p>
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