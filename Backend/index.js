import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from 'cookie-parser';
import path from 'path';

import {app,io,server} from "./SocketIO/server.js";

dotenv.config();

const PORT = process.env.PORT || 5002;
const URI=process.env.MONGODB_URI;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4001',
    credentials: true
}));
app.use(cookieParser());

try{
    mongoose.connect(URI);
    console.log('MongoDB connected');
}catch(error){
    console.log(error);
}

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

//-------------------code for deployment-------------------
if(process.env.NODE_ENV === 'production'){
    const dirPath =path.resolve();
    app.use(express.static('./Frontend/dist'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirPath,'./Frontend/dist','index.html'));
    })

}

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
