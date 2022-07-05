export class RestaurantEntity {
	public readonly _id: any;
	public name: string;
	public address: string;
	public rating: number;

	constructor(restaurant: RestaurantEntity) {
		this.name = restaurant.name;
		this.address = restaurant.address;
		this.rating = restaurant.rating;
	}	
}
