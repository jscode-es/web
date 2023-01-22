export interface CourseData {
	objectID: string;
	subtitle: string;
	title: string;
	date: string;
	description: string;
	topic: string;
	toc: boolean;
	type: string;
	tags: string[];
	icon: string;
}

export interface GetData {
	limit?: number;
}

export interface Courses {
	get(arg: GetData): CourseData[];
}
