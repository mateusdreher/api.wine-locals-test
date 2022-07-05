import { AuthModel } from '../../src/auth/auth.model';
import { TestsConfigs } from '../config';
import supertest from 'supertest';
import { App } from '../../src/app';
import bcrypt from 'bcrypt'; 

describe('Authentication', () => {
	beforeEach(() => {
		new TestsConfigs().connectDatabase();
	});

	afterEach(() => {
		new TestsConfigs().cleanCollection(AuthModel);
	});

	afterAll(() => {
		new TestsConfigs().disconnectDataBase();
	})

	it('should authenticate with valid credentials', async () => {
		const ecryptedPassword = await bcrypt.hash('haha', 10);
		const user = {
			email: 'mateus@email.com',
			password: ecryptedPassword
		}
	
		await AuthModel.create(user);

		const response = await supertest(new App().express)
			.post('/auth')
			.send({
				email: user.email,
				password: 'haha'
			});

		expect(response.status).toBe(200);
	});
})