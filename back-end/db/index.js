const mongoose = require("mongoose");

const connectDB = async () => {
  console.dev(process.env.MONGODB_URI);
  try {
    const con = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.dev("mongoDb connected : ", con.connection.host);
  } catch (error) {
    console.dev("MongoDb connecton error : ", error);
  }
};

module.exports = connectDB;
