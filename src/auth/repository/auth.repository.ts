import { AuthEntity } from "../auth.entity";
import { AuthModel } from "../auth.model";
import { IAuthRepositoryInterface } from "./auth.repository.interface";

export class AuthRepository implements IAuthRepositoryInterface {
	private model = AuthModel;

	constructor() {}

	async getByEmail(email: string): Promise<AuthEntity | undefined> {
		const user = await this.model.findOne({email});

		if (!user) {
			return;
		}

		return {
			_id: user._id,
			email: user.email,
			password: user.password
		}
	}
}