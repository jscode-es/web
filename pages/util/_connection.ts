/* import { MongoClient, ServerApiVersion } from 'mongodb'; */
import mongoose from 'mongoose';

export class Database {
	private readonly uri =
		'mongodb+srv://jscode:$3Guridad123@cluster0.czfszky.mongodb.net/?retryWrites=true&w=majority';
	private client: any = null;
	private collection: string = '';
	private table: string = '';

	constructor({ collection, table }: any) {
		this.client = mongoose.connect(this.uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as any);

		this.collection = collection;
		this.table = table;

		/* 	this.client = new MongoClient(this.uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		} as any);

		this.collection = collection;
		this.table = table; */
	}

	async connect() {
		/* this.client.connect(async (err: any) => {
			Promise.resolve(true);
		}); */
		/*  try {
           
            const db: Db = client.db('<dbname>');
            const users = db.collection('users');
            const result = await users.find({}).toArray();
            console.log(result);
          } catch (error) {
            console.log(error);
          } finally {
            await client.close();
          } */
	}

	async find(params: Record<string, unknown> = {}) {
		const db = this.client.db(this.table);
		/* const table = db.collection(this.collection);
		const result = await table.find(params).toArray();

		this.client.close();

		return result; */
		return [];
	}
}
