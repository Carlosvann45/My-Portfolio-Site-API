import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URI as string);

        console.log(`MongoDB Connected ${connect.connection.host}`);
    } catch (err) {
        console.log(`DB Error: ${err}`);
        process.exit(1);
    }
}

export default connectDb;