// const express = require ('express')
import express from "express";
const app = express();
const port = 4001;

app.get('/',(req,res)=>{
    res.send("hello World");
});

app.listen(port,()=>{
    console.log(`Example app Listening on ${port}`)
});