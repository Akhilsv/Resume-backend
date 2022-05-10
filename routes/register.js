import express from 'express';
const router = express.Router();
import User from '../models/Users.js';
import upload from '../middleware/upload.js';

router.post('/register', async (req, res) => {
	const { fullName, email, college,file } = req.body;
	
	try {
		const user = await User.create({
			fullName,
			email,
			college,
			file,
		});
		res.status(201).json({
			sucess: true,
			user,
		});
	} catch (error) {
		console.log(error);

		res.status(500).json({
			sucess: false,
			error: error.message,
		});
	}
});

// {
//     "username":"Akhil",
//     "email":"akji@gmail.com",
//     "password":"1"
// }

export default router;
