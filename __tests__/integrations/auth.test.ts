import { UserModel } from '../../src/models/user.model';
import { TestsConfigs } from '../config';
import * as supertest from 'supertest';
import { App } from '../../src/app';

describe('Authentication', () => {
	beforeEach(() => {
		new TestsConfigs().connectDatabase();
	});

	beforeEach(() => {
		new TestsConfigs().cleanCollection(UserModel);
	});

	beforeAll(() => {
		new TestsConfigs().disconnectDataBase();
	})

	it('should authenticate with valid credentials', async () => {
		const user = {
			name: 'Mateus',
			email: 'mateus@email.com',
			password: 'haha'
		}
	
		await UserModel.create(user);

		const response = await supertest(new App().express)
			.post('/auth')
			.send({
				email: user.email,
				password: 'haha'
			});

		expect(response.status).toBe(200);
	})
})