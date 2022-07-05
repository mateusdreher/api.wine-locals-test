export class AuthEntity {
	public readonly _id: any;
	public email: string;
	public password: string;

	constructor(auth: AuthEntity) {
		this._id = !this._id ? auth._id : this._id
		this.email = auth.email;
		this.password = auth.password;
	}
}