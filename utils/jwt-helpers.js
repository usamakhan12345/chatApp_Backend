import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()
export const generateToken = async (user)=>{
    try{
     return(
         await  jwt.sign({id : user._id , email : user.email} , process.env.SECRETKEY)
     ) 
    }catch(error){
        console.log('Error --->',error.message)
    }
}