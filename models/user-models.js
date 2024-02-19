import mongoose from "mongoose";
import { Schema } from "mongoose";

const users_Schema = new Schema({
    full_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : String ,

    },
    password : {
        type : String ,
        required : true,
        minlength: 6
    }

})

export const users = new mongoose.model('users' , users_Schema)