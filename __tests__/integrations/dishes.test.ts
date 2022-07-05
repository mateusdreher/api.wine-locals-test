import { TestsConfigs } from '../config';
import { App } from '../../src/app';
import supertest from 'supertest';
import { DishModel } from '../../src/dishes/dish.model';

describe('Dishes', () => {
	beforeEach(() => {
		new TestsConfigs().connectDatabase();
	});

	afterEach(() => {
		new TestsConfigs().cleanCollection(DishModel);
	});

	afterAll(() => {
		new TestsConfigs().disconnectDataBase();
	});

	it('should list dishes', async () => {
		const response = await supertest(new App().express)
			.get('/dishes')

		expect(response.status).toBe(200);
	});

	it('should create new dish', async () => {
		const response = await supertest(new App().express)
			.post('/dishes/new')
			.send({
				"name": "Prato Criado By Test",
				"description": "asdasdasdasd",
				"value": 15.9,
				"restaurant_id": "123"
		})

		expect(response.status).toBe(200);
	});
});