const mongoose = require('mongoose')

// Connects to our web DB
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB;
