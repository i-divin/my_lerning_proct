import mongoose from "mongoose";
import config from "./env.js";

export const connectDB =async () =>{
    try{
        const conn=await mongoose.connect("mongodb+srv://chancedivin11:YVQ2o4oilu5sGgy4@cluster0.oh9ngiy.mongodb.net/task_management",{
            useNewUrlparser:true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB Connected:${conn.connection.host}`);
        return conn;
    }
    catch(err){
        console.error(`MongoDB connection error:${err}`)
        process.exit(1);

    }
    
};






