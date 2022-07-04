import { UserModel } from '../../src/models/user.model';
import { TestsConfigs } from '../config';

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

	it('should create an user', async () => {
		const user = {
			name: 'Mateus',
			email: 'mateus@email.com',
			password: 'haha'
		}
	
		const createdUser = await UserModel.create(user);

		console.log(createdUser);
		expect(createdUser.email).toBe(user.email);
	})
})