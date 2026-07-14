const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log("Connected to:", mongoose.connection.host);
        console.log("Database connected successfully");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;