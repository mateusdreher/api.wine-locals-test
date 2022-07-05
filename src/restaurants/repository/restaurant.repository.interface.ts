import { RestaurantEntity } from "../restaurant.entity";

export interface IRestaurantRepository {
	list(): Promise<RestaurantEntity[]>
}