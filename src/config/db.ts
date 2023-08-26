import mongoose from "mongoose";
import { Users } from '../models/usermodel';
import Common from "../utils/common";

const loadDb = async () => {
    const username = process.env.USERNAME as string;
    let password = process.env.PASSWORD as string;
    console.log(username)
    console.log(password);
    try {
        const user = await Users.findOne({ username });
        console.log('user: ' + user);
        if (!user) {
            password = await Common.hashData(password);

            await Users.create({
                username,
                password
            });

            console.log('user created');
        } else {
            console.log('user already exists');
        }
    } catch(err: any) {
        console.log(err);
        process.exit(1);
    }
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