import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import path from 'path';
import crypto from 'crypto';
const mongoURI = `mongodb+srv://akhil:4pm18cs005@cluster0.s2nxc.mongodb.net/Resume?retryWrites=true&w=majority`;

const storage = new GridFsStorage({
	url: mongoURI,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = buf.toString('hex') + path.extname(file.originalname);
				const fileInfo = {
					filename: filename,
					bucketName: 'users',
				};
				resolve(fileInfo);
			});
		});
	},
});
const upload = multer({ storage });
export default upload;
