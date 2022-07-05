import { DishCreateDto } from "../../dtos/dish/dish-create.dto";
import { DishEntity } from "../dish.entity";

export interface IDishREpository {
	list(): Promise<DishEntity[]>;
	create(dto: DishCreateDto): Promise<DishEntity>;
}