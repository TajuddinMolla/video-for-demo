import dotenv from "dotenv"
import express from "express"
import connectDb from "./db/index.js";

dotenv.config({
    path: './env'
})

const app = express();

connectDb();

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("ERR: ", err);
//             throw err
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Your Port is Listen ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("Error: ", error);
//         throw error
//     }
// })()