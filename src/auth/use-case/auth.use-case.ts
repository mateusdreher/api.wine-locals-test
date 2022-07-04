import { AuthRequestDto } from "../../dtos/auth/auth-request.dto";
import { AuthResponseDto } from "../../dtos/auth/auth-response.dto";
import { IAuthRepositoryInterface } from "../repository/auth.repository.interface";
import { AuthUseCaseInterface } from "./auth.use-case.interface";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export class AuthUseCase implements AuthUseCaseInterface {
	constructor(
		private repository: IAuthRepositoryInterface
	){}

	async auth(dto: AuthRequestDto): Promise<AuthResponseDto | string> {
		const user = await this.repository.getByEmail(dto.email);
		if (!user) {
			throw 'User not found';
		}

		const validPassword = await bcrypt.compare(dto.password, user.password);
		if (!validPassword) {
			throw 'Password is invalid';
		}

		const token = this.generateToken(user._id || user.email);
		return { token };
	}

	generateToken(user_id: string) {
		console.log(process.env.SECRET);
		
		return jwt.sign({id: user_id}, process.env.SECRET || '', {
			expiresIn: 3600
		});
	}
}