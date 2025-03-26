import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoBD connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoBD connection error: ",error);
    }
};