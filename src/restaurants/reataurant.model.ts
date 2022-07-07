import mongoose from 'mongoose';

const RestaurantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	}
});

export const RestaurantModel = mongoose.model('restaurants', RestaurantSchema);