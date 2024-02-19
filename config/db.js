import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from "colors";

dotenv.config()

export const connectDb = async()=>{
    try{
        await   mongoose.connect(process.env.DATABASE_URL , {
            useNewUrlParser : true
        })
        console.log('DataBase Coneected Successfuly'.bgYellow)
        // console.log('hello'.green); 
    }catch(error){
        console.log(`Error ---> ${error.message}`)
        process.exit(1)
    }
}