import { RestaurantEntity } from "../restaurant.entity";

export interface IRestaurantRepository {
	list(): Promise<RestaurantEntity[]>
	getById(id: string): Promise<RestaurantEntity | null>;
}