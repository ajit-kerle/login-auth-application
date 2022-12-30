import express from 'express';
import connection from './db/conn.js';
import router from './routes/router.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from "path";
const __dirname=path.resolve();

const app=express()

// global middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/",router)

// static files

app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"./client/build/index.html"),(err)=>{
    res.status(500).send(err)
   })
})


// DB connection 
connection()

// server 
const port=8000
app.listen(port||8080,()=>{
    console.log(`server start at port no :${port}`)
})