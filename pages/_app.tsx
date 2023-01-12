import 'highlight.js/styles/github.css';
import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import '../styles/globals.css';

import splitbee from '@splitbee/web';

// This initiliazes Splitbee.js
splitbee.init({
	// To use Splitbee on another subdomain.
	// Token can be found in project settings
	token: 'CJ4FN2JHQFQO',

	// Enable cookie-less mode. Defaults to `false`
	disableCookie: false,

	// Set custom urls when using proxying
	scriptUrl: 'https://cdn.splitbee.io/sb.js',
	apiUrl: 'https://hive.splitbee.io',
});

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
