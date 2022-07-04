import { AuthEntity } from "../auth.entity";

export interface IAuthRepositoryInterface {
	getByEmail(email: string): Promise<AuthEntity | undefined>;
}