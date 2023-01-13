// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Database } from '../../../utils/connection';

type Data = Record<string, unknown>;

const get = async (res: NextApiResponse<Data>) => {
	const db = new Database({ table: 'jscode', collection: 'connection' });

	const [data] = await db.find({ name: 'twitch' });

	const response = {
		name: data.name,
		online: data.online,
	};

	return res.status(200).json(response || {});
};

const put = async (res: NextApiResponse<Data>) => {
	const db = new Database({ table: 'jscode', collection: 'connection' });

	const [data] = await db.find({ name: 'twitch' });

	await db.update(data._id, { online: !data.online });

	return res.status(200).json({});
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
