import { DishCreateDto } from "../../dtos/dish/dish-create.dto";
import { DishEntity } from "../dish.entity";
import { IDishREpository } from "../repository/dish.repository.interface";
import { IDishUseCase } from "./dish.use-case.interface";

export class DishUseCase implements IDishUseCase {
	constructor (
		private repository: IDishREpository
	){}

	async list(): Promise<DishEntity[]> {
		return await this.repository.list();
	}

	async create(dto: DishCreateDto): Promise<DishEntity> {
		return await this.repository.create(dto);
	}

}