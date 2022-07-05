import { Request, Response } from "express";
import { DishCreateDto } from "../dtos/dish/dish-create.dto";
import { IDishUseCase } from "./use-case/dish.use-case.interface";

export class DishController {
	constructor (
		private dishUseCase: IDishUseCase
	){}

	async listByRestaurant(request: Request, response: Response) {
		const { restaurant_id } = request.params;

		if(!restaurant_id) {
			return response.status(400).send('Missing restaurant_id');
		}
		
		try {
			const res = await this.dishUseCase.listByRestaurant(restaurant_id);
			
			return response.status(200).send(res);
		}
		catch (exception) {
			return response.status(400).send(exception);
		}
	}

	async create(request: Request, response: Response) {
		const dto: DishCreateDto = request.body;

		if(!dto.name || !dto.description || !dto.value || !dto.restaurant_id) {
			return response.status(400).send('Verify yout payload');
		}
		try {
			const res = await this.dishUseCase.create(dto);
			
			return response.status(200).send(res);
		}
		catch (exception) {
			return response.status(400).send(exception);
		}
	}
}