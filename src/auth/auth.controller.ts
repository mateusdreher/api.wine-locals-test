import { IAuthUseCase } from "./use-case/auth.use-case.interface";
import { Request, Response } from 'express';

export class AuthController {
	constructor(
		private authUseCase: IAuthUseCase
	) {}

	async handle(request: Request, response: Response) {
		const { email, password } = request.body;

		if (!email || !password) {
			response.status(400).send({error: 'Verify yout payload'});
		}
		try {
			const res = await this.authUseCase.auth({email, password});

			return response.status(200).send(res);
		}
		catch(exception) {
			response.status(400).send({error: exception});
		}
	}
}