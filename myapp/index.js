// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';

import userRoutes from './routes/user.js';
import todoRoutes from './routes/todo.js';

const app = express();
dotenv.config();
const port = process.env.PORT

app.use(express.json())
app.use("/user",userRoutes)
app.use("/todo",todoRoutes)


/* app.get('/',(req,res)=>{
    res.send("hello world");
})
 */
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB")

app.listen(port,()=>{
    console.log(`server is running on  on port ${port}`);
})
}catch(error){
    console.log(error.message)
}