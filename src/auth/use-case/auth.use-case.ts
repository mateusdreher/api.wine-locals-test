import { AuthRequestDto } from "../../dtos/auth/auth-request.dto";
import { AuthResponseDto } from "../../dtos/auth/auth-response.dto";
import { IAuthRepositoryInterface } from "../repository/auth.repository.interface";
import { AuthUseCaseInterface } from "./auth.use-case.interface";

export class AuthUseCase implements AuthUseCaseInterface {
	constructor(
		private repository: IAuthRepositoryInterface
	){}

	async auth(dto: AuthRequestDto): Promise<AuthResponseDto | string> {
		const user = await this.repository.getByEmail(dto.email);

		if (!user) {
			return 'User not found';
		}

		//Validar senha
		// Gerar token
		return {
			token: 'hahaha123'
		}
	}
}