import { DishCreateDto } from "../../dtos/dish/dish-create.dto";
import { DishEntity } from "../dish.entity";

export interface IDishREpository {
	listByRestaurant(restaurant_id: string): Promise<DishEntity[]>;
	create(dto: DishCreateDto): Promise<DishEntity>;
}