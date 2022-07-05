import { DishCreateDto } from "../../dtos/dish/dish-create.dto";
import { DishEntity } from "../dish.entity";
import { DishModel } from "../dish.model";
import { IDishREpository } from "./dish.repository.interface";

export class DishRepository implements IDishREpository {
	private model;

	constructor() {
		this.model = DishModel;
	}

	async list(): Promise<DishEntity[]> {
		return await this.model.find();
	}

	async create(dto: DishCreateDto): Promise<DishEntity> {	
		return await this.model.create(dto);
	}
}