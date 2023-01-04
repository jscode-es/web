import { Layout } from '../src/app/components/layout';

export default function Blog() {
	const head = {
		title: 'jscode 🤖 Descripción del blog',
		description: 'Tutoriales de programación',
	};

	return (
		<>
			<Layout {...head}>
				<h1>blog</h1>
			</Layout>
		</>
	);
}
