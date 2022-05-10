import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';
import registerRoutes from './routes/register.js';
import connectDB from './config/db.js';

connectDB();
const app = express();

app.use(cors());
const mongoURI = `mongodb+srv://akhil:4pm18cs005@cluster0.s2nxc.mongodb.net/Resume?retryWrites=true&w=majority`;




// app.post('/api', upload.single('file'), (req, res) => {
// 	res.json({ file: req.file });
// });

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', registerRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
	console.log(`Server is running at ${PORT}`),
);

process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged error: ${err}`);
	server.close(() => process.exit(1));
});
