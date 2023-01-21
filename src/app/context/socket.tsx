import { createContext, useState, useContext, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

const SocketContext = createContext<any>({} as any);

export function SocketProvider({ children }: any) {
	const [socket, setSocket] = useState<Socket<any, any>>();

	useEffect(() => {
		const server: Socket<any, any> = io(
			String(process.env.NEXT_PUBLIC_SOCKET)
		);

		setSocket(server);

		return () => {
			server.disconnect();
		};
	}, []);

	return (
		<SocketContext.Provider
			value={{
				socket,
				setSocket,
			}}>
			{children}
		</SocketContext.Provider>
	);
}

export const useSocket = () => useContext(SocketContext);
