import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	value: {
		type: Number,
		required: true
	},
	restaurant_id: {
		type: String,
		required: true
	}
});

export const DishModel = mongoose.model('dishes', DishSchema);