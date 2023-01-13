import { Filter, MongoClient } from 'mongodb';

export class Database {
	private readonly uri =
		'mongodb+srv://jscode:$3Guridad123@cluster0.czfszky.mongodb.net/?retryWrites=true&w=majority';

	private collection: string = '';
	private table: string = '';

	constructor({ collection, table }: any) {
		this.collection = collection;
		this.table = table;
	}

	client() {
		const client = new MongoClient(this.uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			/* serverApi: ServerApiVersion.v1, */
		});

		return client;
	}

	async find(params: Record<string, unknown> = {}) {
		const client = this.client();
		const db = client.db(this.table);
		const table = db.collection(this.collection);
		const result = await table.find(params).toArray();

		client.close();

		return result;
	}

	async update(_id: Filter<Document>, params: Record<string, unknown> = {}) {
		const client = this.client();
		const db = client.db(this.table);
		const table = db.collection(this.collection);

		table.findOneAndUpdate({ _id }, { $set: params });

		client.close();

		return [];
	}
}
