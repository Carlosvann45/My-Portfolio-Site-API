import mongoose from "mongoose";
import { Users } from '../models/users';
import Common from "../utils/common";

const loadDb = async () => {
    const username = process.env.USER_USERNAME as string;
    let password = process.env.USER_PASSWORD as string;
    
    try {
        const user = await Users.findOne({ username });
        
        if (!user) {
            password = await Common.hashData(password);

            await Users.create({
                username,
                password
            });
        }
    } catch(err) {
        console.log(`DB Error: ${err}`);
        process.exit(1);
    }

    console.log('Users Loaded');
}

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URI as string);

        console.log(`MongoDB Connected ${connect.connection.host}`);
    } catch (err) {
        console.log(`DB Error: ${err}`);
        process.exit(1);
    }

    console.log('Loading db');

    await loadDb();
}

export default connectDb;