import dotenv from "dotenv";
import connectDB from "./database/db.js" 
import app from "./app.js";

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is Running at port " : $(process.env.PORT)`);
    })
})
.catch((error) => {
    console.log("Mongo db connection failed !!!",error);
})