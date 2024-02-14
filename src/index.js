import dotenv from "dotenv"
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDb().then((res) => {
    app.listen(process.env.PORT, () => {
        console.log(`Your Port is Listen ${process.env.PORT}`);
    })
}).catch(err => {
    console.log(`Error: ${err}`);
})

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