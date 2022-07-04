import mongoose from 'mongoose';

const AuthSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});
 
export const AuthModel = mongoose.model('auth', AuthSchema); 