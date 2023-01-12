// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

type Data = Record<string, unknown>;

const file = path.resolve('data/twitch.json');
fs.chmod(file, 777, () => {
	console.log('change');
});

const get = (res: NextApiResponse<Data>, data: Data) => {
	return res.status(200).json(data);
};

const put = (res: NextApiResponse<Data>, data: Data) => {
	const newData = {
		online: !data.online,
	};

	fs.writeFileSync(file, JSON.stringify(newData));

	return res.status(200).json(newData);
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method } = req;

	const raw = fs.readFileSync(file);
	const data = JSON.parse(raw as any);

	if (method === 'GET') return get(res, data);
	if (method === 'PUT') return put(res, data);

	res.status(404).json({});
}