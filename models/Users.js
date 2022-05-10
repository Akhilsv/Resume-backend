import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
	},
	email: {
		type: String,
	},
	college: {
		type: String,
		// select: false,
	},
	file: {
		type: String,
	},
});

const user = mongoose.model('User', userSchema);

export default user;
