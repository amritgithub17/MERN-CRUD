import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv'
import Routes from "./routes/route.js"
import cors from "cors";
import bodyParser from "body-parser";
const app=express();
app.use(bodyParser.json({extended : true})) //post API se jo data aa rha h usko parse krne k liye 
app.use(bodyParser.urlencoded({extended : true})) //url ko sahise parse krne k liye
app.use(cors());
app.use("/",Routes);




const PORT=8000;
// server is created using listen
// Takes 2 arguments , a PORT and a callback functions
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);
app.listen(PORT , ()=> console.log(`server is running successfully on PORT ${PORT}`))