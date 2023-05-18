import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};
mongoose.set('strictQuery', false);
export default connectDB;
