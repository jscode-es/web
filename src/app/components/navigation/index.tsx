import style from './style.module.css';

export function Navigation() {
	return (
		<div className={style.container}>
			<div className={style.bg}></div>
			<div className={style.content}>
				<div>logo</div>
				<div>Buscador de blog</div>
				<div>Ir a repositorios</div>
			</div>
		</div>
	);
}
