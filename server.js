import  express from "express";
import {connectDb} from "./config/db.js"
import {userRouter} from "./router/user-router.js"
import cors from 'cors'
import dotenv from 'dotenv'
const app = express()

const PORT = process.env.PORT ||3000


dotenv.config()
connectDb()


app.use(express.json())
app.use(cors())
app.use([userRouter])
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send("Server is working")

})

app.listen(PORT,()=>{
    console.log('app is running on 8000')
})