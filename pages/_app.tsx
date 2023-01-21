import 'highlight.js/styles/github.css';
import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import '../styles/globals.css';

import { useEffect } from 'react';
import { Statistics } from '../src/infrastruture/repository/statistics';
import { SocketProvider } from '../src/app/context/socket';

Statistics.init();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SocketProvider>
			<Component {...pageProps} />
		</SocketProvider>
	);
}
