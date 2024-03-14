import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
// import { createLogger } from 'vite';
import mongoose from 'mongoose';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


import getProductRouter from "./routes/content.js"
import getUserRouter from "./routes/users.js"

const app = express();
dotenv.config()
const port = 1341


// middleware
app.use("/api" , express.json())
app.use(cors());
// app.use(express.urlencoded({ extended:false }));
//logger
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}`, req.body)
	next()
})

const _dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(_dirname, "../dist");
app.use(express.static(dist));

app.options("*", (req, res) => {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.send();
});


app.use( '/api/content' , getProductRouter );
app.use("/api/user" , getUserRouter ); 


mongoose.
connect(process.env.Mongo_URL).then(() => {
    console.log("connected to mongodb");
}).catch( (error) => {
    console.log(error);
})








app.listen(port, () => {
    console.log(`server listening on ${port}`);
})