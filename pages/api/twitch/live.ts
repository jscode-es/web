// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'object_mysql';

type Data = Record<string, unknown>;

process.env.DB_HOST =
	'test-speack-me-do-user-12145768-0.b.db.ondigitalocean.com';
process.env.DB_USER = 'doadmin';
process.env.DB_PASS = 'AVNS_bI25-jrWk3kbCgD5JjF';
process.env.DB_TABLE = 'twitch';
process.env.DB_PORT = '25060';

const get = async (res: NextApiResponse<Data>) => {
	const { User } = await db();

	const {
		result: [user],
	} = await User.get({
		values: ['online'],
		where: {
			id: 1,
		},
	});

	return res.status(200).json(user || {});
};

const put = async (res: NextApiResponse<Data>) => {
	const { User } = await db();

	const {
		result: [user],
	} = await User.get({
		values: ['online'],
		where: {
			id: 1,
		},
	});

	const online = user.online === 1 ? 0 : 1;

	await User.update(1, { online });

	return res.status(200).json({ online } || {});
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method } = req;

	if (method === 'GET') return get(res);
	if (method === 'PUT') return put(res);

	res.status(404).json({});
}
