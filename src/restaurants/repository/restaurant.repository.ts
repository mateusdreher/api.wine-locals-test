import { RestaurantModel } from "../reataurant.model";
import { RestaurantEntity } from "../restaurant.entity";
import { IRestaurantRepository } from "./restaurant.repository.interface";

export class RestaurantRepository implements IRestaurantRepository {
	private model;

	constructor() {
		this.model = RestaurantModel;
	}
	async list(): Promise<RestaurantEntity[]> {
		return await this.model.find();
	}

	async getById(_id: string): Promise<RestaurantEntity | null> {
		return await this.model.findOne({_id});
	}
}