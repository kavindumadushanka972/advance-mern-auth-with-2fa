import mongoose, { connect } from "mongoose";
import { config } from "../config/app.config";

const connectDatabase = async () => {
  try {
    await mongoose,connect(config.MONGO_URI);
    console.log('Database connected');
  } catch (error) {
    console.log('Database connection error', error);
    process.exit(1);
  }
}

export default connectDatabase;