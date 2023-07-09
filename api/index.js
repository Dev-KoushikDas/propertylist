import express from "express";  
import dotenv from "dotenv";
import mongoose from "mongoose";
//.js for express 
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
//import { faUserInjured } from "@fortawesome/free-solid-svg-icons";

import cors from "cors";
/*
/normal way to do it is this .......if we dont like the structure then...
const express = require("express")*/

/*if we want to use this like import , export  then add "type":"module", to package.json file */

const app = express();
dotenv.config();

const connect = async () => {
//async is used because await is there ..
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;//in this case terminate when there is an error
    //handleError(error);
    
  }
};


/*
if we delete the ip address in the mongo DB this will print disconnected
*/ 
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

/*
if ip address is right then console will print connected
*/
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!");
})

//get has request and response paarameters use for api requests ans res would be what we 
//get as a response
//get("/"-> this is the end point of the address we want to send the response) 
app.get("/",(req,res)=>{
    res.send("hello first request!")
})

//middlewares
app.use(cookieParser());

//using cors but in this project we use 
app.use(cors());

//middlewares
//so whenever we request for /auth we get response authRoute which redirect auth.js
//so the address becomes /auth/user like this for example
//app.use("/auth", authRoute);

//so that we can send json objects directly to express
//so we can use any "body" as i did using insomnia
app.use(express.json());



app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);



//so basically when i send a api request to api/hotels 
//and write router.get ("/", async (req, res,next))=>{
// } console.log("something")
//return next()
// it comes to app.use express then passes to api/hotels
//in api hotels hotelsRoute does whatever printing etc job is there  
//then as we use return next() it passes control to this line 
//where hi i am middleware is printed

/*app.use((req,res,next)=>{
    console.log("hi i'm a middleware!")
})*/

//error handling using middlewears 
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success:false, 
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
});


app.listen(8000,()=>{
    connect();//used to connect to backend
    console.log("Connected to backend.");
});
