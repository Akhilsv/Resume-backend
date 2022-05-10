import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

let gfs;
const mongoURI = `mongodb+srv://akhil:4pm18cs005@cluster0.s2nxc.mongodb.net/Resume?retryWrites=true&w=majority`;
const connectDB = async () => {
	const conn = mongoose.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		
	})
	// conn
	// 	.once('open', () => {
	// 		// Init stream
	// 		gfs = Grid(conn.db, mongoose.mongo);
	// 		gfs.collection('users');
	// 	})

	console.log('MongoDB connected');
};

export default connectDB;
