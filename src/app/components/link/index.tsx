export function LinkTo({ href, text }: any) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noreferrer'>
			{text}
		</a>
	);
}
