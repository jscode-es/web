export interface Twitch {
	isLive(host: string): Promise<boolean>;
}
