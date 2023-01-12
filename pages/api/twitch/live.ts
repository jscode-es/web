// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs, { promises as fsPromise } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

type Data = Record<string, unknown>;

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'twitch.json');

const get = (res: NextApiResponse<Data>, data: Data) => {
	return res.status(200).json(data || {});
};

const put = (res: NextApiResponse<Data>, data: Data) => {
	const newData = {
		online: !data.online,
	};

	fsPromise.writeFile(file, JSON.stringify(newData), { mode: 777 });

	return res.status(200).json(newData || {});
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { method } = req;

	if (!fs.existsSync(dir)) {
		const data = JSON.stringify({
			online: false,
		});

		await fsPromise.mkdir(dir, 777);
		await fsPromise.writeFile(file, data, { mode: 777 });
	}

	const raw = await fsPromise.readFile(file);
	const data = JSON.parse(raw as any);

	if (method === 'GET') return get(res, data);
	if (method === 'PUT') return put(res, data);

	res.status(404).json({});
}
