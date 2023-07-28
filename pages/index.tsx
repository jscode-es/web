import { Articles } from '../src/app/components/blog/articles';
import { Headline } from '../src/app/components/blog/headline';
import { Layout } from '../src/app/components/layout';
import { Projects } from '../src/app/components/project/articles';
import { Techs } from '../src/app/components/techs';
import { ArticlesRepository } from '../src/infrastruture/repository/articles';
import { CourseRepository } from '../src/infrastruture/repository/courses';
import { HeadlineRepository } from '../src/infrastruture/repository/headline';
import { ProjectRepository } from '../src/infrastruture/repository/project';

export async function getStaticProps() {
	const listArticle = new ArticlesRepository().get();
	const listCourse = new CourseRepository().get();
	const listProject = new ProjectRepository().get();
	const headline = new HeadlineRepository([
		listProject[0],
		listArticle[0],
		listCourse[0],
	]).get();

	return {
		props: {
			articles: listArticle,
			courses: listCourse,
			projects:listProject,
			headline,
		},
	};
}

export default function Home({ articles, courses, headline, projects }: any) {
	const head = {
		title: 'JSCode - Junior & Senior Code',
		description: 'Cursos y articulos de programación, además de proyectos de código abierto.',
	};

	return (
		<>
			<Layout {...head}>
				<Headline data={headline} />
				<Techs />
				<Articles data={articles} />
				<Projects data={projects} />
				{/* <Courses data={courses} /> */}
			</Layout>
		</>
	);
}
