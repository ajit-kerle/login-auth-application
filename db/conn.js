import mongoose from "mongoose";
import dotenv from "dotenv";


// database connection function
dotenv.config()
const connection=()=>{
    try{
    const URL=process.env.DATABASE
    mongoose.set('strictQuery', true);
    mongoose.connect(URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
    })
    console.log("MongoDB Coonected successfully")

    }catch(error){
    console.log("error while coonecting with mongodb")
    }
}


// exporting function
export default connection

