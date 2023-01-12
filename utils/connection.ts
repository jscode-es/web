/* import { MongoClient, ServerApiVersion } from 'mongodb'; */
import mongoose from 'mongoose';

export class Database {
	private readonly uri =
		'mongodb+srv://jscode:$3Guridad123@cluster0.czfszky.mongodb.net/?retryWrites=true&w=majority';
	private client: any = null;
	private collection: string = '';
	private table: string = '';

	constructor() {
		this.client = mongoose.connect(this.uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as any);

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

	async getConnection(params: Record<string, unknown> = {}) {
		let schema = new mongoose.Schema({
			_id: (mongoose.Schema as any).ObjectId,
			name: String,
			online: Boolean,
		});

		console.log(schema);

		const model = mongoose.model('connection', schema, 'connection');

		/* const model = mongoose.model('connection', schema);

		model.find(params, function (err: any, docs: any) {
			console.log({ err, docs });
			if (!err) {
				console.log(docs);
				process.exit();
			} else {
				throw err;
			}
		}); */

		/* const table = db.collection(this.collection);
		const result = await table.find(params).toArray();

		this.client.close();

		return result; */
		return [];
	}
}
