import express from "express";
import { mongoDBURL, port } from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookmodel.js'
import booksRoutes from "./routes/booksRoutes.js";
import cors from 'cors';
import jwt from "jsonwebtoken"

const app =express();
app.use(cors());
app.use(express.json());
app.use('/books',booksRoutes);
app.get('/',(req,res)=>{
    return  res.send('welcome to aditya site');

});


mongoose
.connect(mongoDBURL)
.then(()=>{
console.log('app connected to database');
app.listen(port,()=>{
    console.log(`App is listening to port:${port}`);
});
})
.catch((err)=>{
console.log(err);
});

