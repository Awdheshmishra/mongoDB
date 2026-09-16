import express from 'express';
import dotenv from 'dotenv';
import routes from"./routes/route.js"

const app = express();
dotenv.config();

//routing

app.use("/api",routes);

// const PORT = 4001;
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})