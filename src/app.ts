import express from 'express';
import cors from 'cors';
import { Database } from './database';
import { healthRoute } from './routes/health.routes';
import dotenv from 'dotenv';
import { authRoute } from './routes/auth.routes';
import { restaurantsRoute } from './routes/restaurants.routes';
export class App {
	public express: express.Application;
	private database: Database;
	
	constructor() {
		dotenv.config({
			path: process.env.NODE_ENV === 'test' ? 'env.test' : '.env'
		});
		this.express = express();
		this.database = new Database();

		this.database.connect(process.env.DB_CONNECTION_STRING || '');
		this.middlewares();
		this.router();
	}

	private middlewares() {
		this.express.use(express.json());
		this.express.use(cors({
			origin: '*'
		}))
	}

	private router() {
		this.express.use('/', healthRoute);
		this.express.use('/auth', authRoute);
		this.express.use('/restaurants', restaurantsRoute);
	}
}