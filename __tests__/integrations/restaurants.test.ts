import { RestaurantModel } from '../../src/restaurants/reataurant.model';
import { TestsConfigs } from '../config';
import { App } from '../../src/app';
import supertest from 'supertest';

describe('Restautants', () => {
	beforeEach(() => {
		new TestsConfigs().connectDatabase();
	});

	afterEach(() => {
		new TestsConfigs().cleanCollection(RestaurantModel);
	});

	afterAll(() => {
		new TestsConfigs().disconnectDataBase();
	});

	it('should list restaurants', async () => {
		const response = await supertest(new App().express)
			.get('/restaurants')

		expect(response.status).toBe(200);
	})
});