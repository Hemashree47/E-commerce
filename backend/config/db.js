require('dotenv').config({ path: './../config.env' });
const mongoose = require('mongoose');

async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: 'true',
			useUnifiedTopology: 'true',
		});
	} catch (err) {
		console.log(err);
	}
}

module.exports = connectDB;
