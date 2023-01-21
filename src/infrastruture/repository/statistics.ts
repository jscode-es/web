import splitbee from '@splitbee/web';

export class Statistics {
	static init() {
		// This initiliazes Splitbee.js
		splitbee.init({
			// To use Splitbee on another subdomain.
			// Token can be found in project settings
			token: 'VL0GI9KKLT45',

			// Enable cookie-less mode. Defaults to `false`
			disableCookie: false,

			// Set custom urls when using proxying
			scriptUrl: 'https://cdn.splitbee.io/sb.js',
			apiUrl: 'https://hive.splitbee.io',
		});
	}
}
