import { Articles } from '../src/app/components/blog/articles';
import { Courses } from '../src/app/components/course/courses';
import { Headline } from '../src/app/components/blog/headline';
import { Layout } from '../src/app/components/layout';
import { Techs } from '../src/app/components/techs';
import { ArticlesRepository } from '../src/infrastruture/repository/articles';
import { CourseRepository } from '../src/infrastruture/repository/courses';
import { HeadlineRepository } from '../src/infrastruture/repository/headline';

export async function getStaticProps() {
	const listArticle = new ArticlesRepository().get();
	const listCourse = new CourseRepository().get();
	const headline = new HeadlineRepository([
		listArticle[0],
		listCourse[0],
	]).get();

	return {
		props: {
			articles: listArticle,
			courses: listCourse,
			headline,
		},
	};
}

export default function Home({ articles, courses, headline }: any) {
	const head = {
		title: 'JSCode - Junior & Senior Code',
		description: 'Cursos y articulos de programación',
	};

	return (
		<>
			<Layout {...head}>
				<Headline data={headline} />
				<Techs />
				<Articles data={articles} />
				<Courses data={courses} />
			</Layout>
		</>
	);
}
