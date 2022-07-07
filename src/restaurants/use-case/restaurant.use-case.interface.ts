import { RestaurantListResponseDto } from "../../dtos/restaurant/restaurant-list-response.dto";

export interface IRestaurantUseCase {
	list(): Promise<RestaurantListResponseDto[]>;
	getById(id: string): Promise<RestaurantListResponseDto | null>;
}