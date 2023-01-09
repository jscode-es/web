import { NewsletterData } from '../interfaces/newsletter';

export class NewsletterRepository {
	email: string;

	constructor(options: NewsletterData) {
		this.email = options.email;
	}

	async send() {
		console.log('Enviar mail', this.email);
	}

	validateEmail(): boolean {
		const { email } = this;

		const exp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

		return exp.test(email);
	}
}
