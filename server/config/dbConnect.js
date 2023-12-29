const mongoose = require("mongoose");

const connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Connected to MongoDb!");
	} catch (error) {
		throw new Error("Error connecting to MongoDB: ", error);
	}
};

module.exports = { connectMongoDB };
