import express, { response } from "express";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser'
import morgan from "morgan";
import helmet, { crossOriginResourcePolicy } from 'helmet'
import connectDB from "./config/ConnectDB.js";



const app =express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}))
app.use(express.json());
app.use(cookieParser())
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy: false
}))

app.get("/",(request, response)=>{
    response.json({
        message :"server is running"+PORT
    })
})
 const PORT = 8080 || PORT;





 connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("server is running",PORT)
    })
 })

