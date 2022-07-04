export class AuthEntity {
	public readonly _id?: string;
	public email: string;
	public password: string;

	constructor(auth: AuthEntity) {
		this.email = auth.email;
		this.password = auth.password;
	}
}