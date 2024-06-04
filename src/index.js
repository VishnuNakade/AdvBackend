// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()











// import express from "express"
// const app = express()

// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME }`)

//        // if database connect hone ke bad bhi express app connect nahi ho pa rahi hai
//        app.on("errror",(error)=>{
//         console.log("ERRR: ", error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.error("ERROR" , error)
//     }
// })()