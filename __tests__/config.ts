import dotenv from 'dotenv';
import { Model } from 'mongoose';
import { Database } from '../src/database/index';

export class TestsConfigs {
	constructor() {
		dotenv.config({
			path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
		});
	}

	connectDatabase() {
		new Database().connect(process.env.DB_CONNECTION_STRING || '');
	}
	disconnectDataBase() {
		new Database().disconnect();
	}
	cleanCollection(model: Model<any>) {
		new Database().cleanCollection(model);
	}
}