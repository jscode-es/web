import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { GetData, Project, ProjectData } from '../interfaces/project';

export class ProjectRepository implements Project {
	private files: string[];

	constructor() {
		this.files = fs.readdirSync(path.join(__dirname,'../../../','data/projects'));
	}

	get(arg?: GetData) {
		const limit = arg?.limit || 4;

		const listProject = this.files.map((filename) => {
			const markdownWithMeta = fs.readFileSync(
				path.join(__dirname,'../../../','data/projects', filename),
				'utf-8'
			);

			let { data } = matter(markdownWithMeta);

			data.href = filename.replace('.md', '');

			return data;
		});

		const list = listProject
			.sort((a, b) => this.getTime(b.date) - this.getTime(a.date))
			.slice(0, limit) as ProjectData[];

		return list;
	}

	getTime(date: string) {
		return new Date(date).getTime();
	}
}
