import  express from "express";
import cors from 'cors'
const app = express()




app.get('/home' , (req,res)=>{
    res.send("Hello world in home url")

})

app.listen(8000,()=>{
    console.log('app is running on 8000')
})