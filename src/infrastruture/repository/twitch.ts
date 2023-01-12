import { Twitch } from '../../domain/twitch';

export class TwitchRepository implements Twitch {
	private readonly selfApi = `http://localhost:3000/api/twitch/live`;
	private readonly iframeSrc =
		'https://player.twitch.tv/?channel=jscode_&parent=${document.location.hostname}';

	async isLive() {
		const response = await fetch(this.selfApi);
		const data = await response.json();

		return data.online;
	}

	getIframeSrc() {
		return this.iframeSrc;
	}
}
