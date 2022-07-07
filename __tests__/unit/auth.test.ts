import { AuthUseCase } from "../../src/auth/use-case/auth.use-case";
import { TestsConfigs } from '../config';
import jwt from 'jsonwebtoken';

jest.mock('../../src/auth/repository/auth.repository.interface.ts', () => {
	return {
		getByEmail: jest.fn().mockImplementation(() => {
			return {
				_id: '12131513',
				email: 'mateus@email.com',
				password: 'haha'
			}
		})
	}
});

const authRepository = require('../../src/auth/repository/auth.repository.interface.ts');

describe('Authentication', () => {
	beforeEach(() => {
		new TestsConfigs();
	});

	it('should generate a jwt token', () => {
		const token = new AuthUseCase(authRepository).generateToken('123456');

		const validToken = jwt.verify(token, process.env.SECRET || '');
		
		expect(validToken).toHaveProperty('id');
	});
})