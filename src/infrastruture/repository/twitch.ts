import { Twitch } from '../../domain/twitch';

export class TwitchRepository implements Twitch {
	private readonly selfApi = `https://jscode.es/api/twitch/live`;
	private readonly iframeSrc =
		'https://player.twitch.tv/?channel=jscode_&parent=jscode.es';

	async isLive() {
		const response = await fetch(this.selfApi);
		const data = await response.json();

		return data.online;
	}

	getIframeSrc() {
		return this.iframeSrc;
	}
}
