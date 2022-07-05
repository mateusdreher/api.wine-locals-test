export interface RestaurantListResponseDto {
	_id: string;
	name: string;
	address: string;
	dishes: Array<string>;
	rating: number;
}