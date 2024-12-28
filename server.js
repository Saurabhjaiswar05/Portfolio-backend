import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/emailRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "https://saurabhportf.netlify.app/" }));

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Hello, world!'); // Or whatever response you want
  });
// rest api
app.use('/api/v1',router);



app.listen(process.env.PORT,()=>{
    console.log(`server running oon port : ${process.env.PORT}`);
});
