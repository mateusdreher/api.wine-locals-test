import { RestaurantListResponseDto } from "../../dtos/restaurant/restaurant-list-response.dto";
import { IRestaurantRepository } from "../repository/restaurant.repository.interface";
import { IRestaurantUseCase } from "./restaurant.use-case.interface";

export class RestaurantUseCase implements IRestaurantUseCase {
	
	constructor(
		private repository: IRestaurantRepository
	){}

	async list(): Promise<RestaurantListResponseDto[]> {
		return await this.repository.list();
	}

	async getById(id: string): Promise<RestaurantListResponseDto | null> {
		return await this.repository.getById(id);
	}
}