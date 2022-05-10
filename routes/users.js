import express from 'express';
import User from '../models/Users.js';

const router = express.Router();

router.get('/users', async (req, res) => {
	try {
		const allUsers = await User.find();
		res.json(allUsers);
	} catch (error) {
		res.json({ message: error.message });
	}
});

export default router;
