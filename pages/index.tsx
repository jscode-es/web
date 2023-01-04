import { Layout } from '../src/app/components/layout';
import { Headline } from '../src/app/components/blog/headline';
import { Articles } from '../src/app/components/blog/articles';

export default function Home() {
	const head = {
		title: 'jscode 🤖 Junior & Senior Code',
		description: 'Tutoriales de programación',
	};

	return (
		<>
			<Layout {...head}>
				<Headline />
				<Articles />
			</Layout>
		</>
	);
}
