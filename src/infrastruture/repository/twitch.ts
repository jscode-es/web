import { Twitch } from '../../domain/twitch';

export class TwitchRepository implements Twitch {
	private readonly pathname = `/twitch/status`;
	private readonly iframeSrc =
		'https://player.twitch.tv/?channel=jscode_&parent=jscode.es';

	async isLive(host: string) {

		try {
			const response = await fetch(`${host}${this.pathname}`);
			const data = await response.json();
			return data.online;
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	getIframeSrc() {
		return this.iframeSrc;
	}
}
