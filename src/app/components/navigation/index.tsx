import style from './style.module.css';

export function Navigation() {
	return (
		<div className={style.container}>
			<div>logo</div>
			<div>Buscador de blog</div>
			<div>Ir a repositorios</div>
		</div>
	);
}
