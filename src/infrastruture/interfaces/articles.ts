export interface ArticleData {
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

export interface Articles {
	get(arg: GetData): ArticleData[];
}
