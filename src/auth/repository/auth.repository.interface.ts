import { AuthEntity } from "../auth.entity";

export interface IAuthRepository {
	getByEmail(email: string): Promise<AuthEntity | undefined>;
}