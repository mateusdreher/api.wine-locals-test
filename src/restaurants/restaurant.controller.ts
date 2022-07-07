import { Request, Response } from "express";
import { IRestaurantUseCase } from "./use-case/restaurant.use-case.interface";

export class RestaurantController {
	constructor (
		private restaurantUseCase: IRestaurantUseCase
	){}

	async list(request: Request, response: Response) {
		
		try {
			const res = await this.restaurantUseCase.list();
			
			return response.status(200).send(res);
		}
		catch (exception) {
			return response.status(400).send(exception);
		}
	}

	async getById(request: Request, response: Response) {
		const { id } = request.params;

		try {
			const res = await this.restaurantUseCase.getById(id);
			
			return response.status(200).send(res);
		}
		catch (exception) {
			return response.status(400).send(exception);
		}
	}
}