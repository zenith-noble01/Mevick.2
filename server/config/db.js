const mongoose = require("mongoose");

const connectDb = async () =>{
    await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to DB");
}

module.exports = connectDb