import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
// import { createLogger } from 'vite';
import mongoose from 'mongoose';

import { Product } from './models/post.js';
import getProductRouter from "./routes/post.js"
import postProductRouter from "./routes/post.js"

const app = express();
dotenv.config()
const port = 1341
app.use( express.json())

app.use( "/api" , getProductRouter )
app.use( "/api" , postProductRouter)


mongoose.
connect(process.env.Mongo_URL).then(() => {
    console.log("connected to mongodb");
}).catch( (error) => {
    console.log(error);
})








app.listen(port, () => {
    console.log(`server listening on ${port}`);
})