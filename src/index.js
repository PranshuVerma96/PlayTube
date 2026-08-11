import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js';
import dns from "dns";

dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);

dotenv.config({
  path : './.env'
});

connectDB()
.then(() =>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port ${process.env.PORT}` );
    
  })
})
.catch((err) => {
  console.log("Mongo Db connection failed !!" , err);
  
})




















/*
import e from "express";
const app = express();

//iife

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}
        ${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
  }
})();
*/

