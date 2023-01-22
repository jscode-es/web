import { DataPost } from '../interfaces/headline';

export class HeadlineRepository {
	private post;

	constructor(post: DataPost) {
		this.post = post;
	}

	get() {
		return this.post.sort(
			(a, b) => this.getTime(b.date) - this.getTime(a.date)
		)[0];
	}

	getTime(date: string) {
		return new Date(date).getTime();
	}
}
