// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Database } from '../../../utils/connection';

type Data = Record<string, unknown>;

const get = async (res: NextApiResponse<Data>) => {
	const db = new Database({ table: 'jscode', collection: 'connection' });

	await db.connect();

	const [data] = await db.find({ name: 'twitch' });

	/* delete data._id; */

	return res.status(200).json(data || {});
};

const put = async (res: NextApiResponse<Data>) => {
	/* 	const {
		result: [user],
	} = await User.get({
		values: ['online'],
		where: {
			id: 1,
		},
	});

	const online = user.online === 1 ? 0 : 1;

	await User.update(1, { online });

	return res.status(200).json({ online } || {}); */
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method } = req;

	if (method === 'GET') return get(res);
	/* if (method === 'PUT') return put(res); */

	res.status(404).json({});
}
