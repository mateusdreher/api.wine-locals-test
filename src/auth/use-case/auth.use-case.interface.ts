import { AuthRequestDto } from "../../dtos/auth/auth-request.dto";
import { AuthResponseDto } from "../../dtos/auth/auth-response.dto";

export interface AuthUseCaseInterface {
	auth(dto: AuthRequestDto): Promise<AuthResponseDto | string>;
}