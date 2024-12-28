import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/emailRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// rest api
app.use('/api/v1',router);



app.listen(process.env.PORT,()=>{
    console.log(`server running oon port : ${process.env.PORT}`);
});