export class DishEntity {
	public readonly _id: any;
	public name: string;
	public description: string;
	public value: number;

	constructor(dish: DishEntity) {
		this.name = dish.name;
		this.description = dish.description;
		this.value = dish.value;
	}
}