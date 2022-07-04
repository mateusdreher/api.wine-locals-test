import mongoose, { Model } from 'mongoose';

export class Database {
	connect(connectionString: string) {
		console.log('Connecting to database...');
		mongoose.connect(connectionString)
			.then(() => {
				console.log('Connect with database successfully')
			})
			.catch((exception) => {
				console.error(exception);
			})
	}

	disconnect() {
		mongoose.disconnect();
	}

	cleanCollection(model: Model<any>) {
		model.remove({}, () => {
			
		});
	}
}