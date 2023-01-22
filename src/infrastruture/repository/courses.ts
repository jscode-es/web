import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Courses, GetData, CourseData } from '../interfaces/courses';

export class CourseRepository implements Courses {
	private courses: string[];

	constructor() {
		this.courses = fs.readdirSync(path.join('courses'));
	}

	get(arg?: GetData) {
		const limit = arg?.limit || 4;

		const listCourse = this.courses.map((filename) => {
			const setting = JSON.parse(
				fs.readFileSync(
					path.join('courses', filename, 'setting.json'),
					'utf-8'
				)
			);

			setting.href = filename;

			return setting;
		});

		const list = listCourse
			.sort((a, b) => this.getTime(b.date) - this.getTime(a.date))
			.slice(0, limit) as CourseData[];

		return list;
	}

	getPaths() {
		const dir = path.join('courses');
		const courses = fs.readdirSync(dir);
		const paths: any = [];

		courses.map((course) => {
			const parts = fs.readdirSync(path.join(dir, course));

			return parts.map((filename: string) => {
				if (filename !== 'setting.json') {
					paths.push({
						params: {
							slug: `${course}-${filename.replace('.md', '')}`,
						},
					});
				}
			});
		});

		return paths;
	}

	getTime(date: string) {
		return new Date(date).getTime();
	}
}
