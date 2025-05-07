import express from 'express';
import dotenv from 'dotenv';
import { ConnectDB } from './config/user';
import userRouter from './routes/userRoute';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("hello world!");
})
app.use(express.json());
app.use('/api/user',userRouter);

app.listen(port ,()=>{
    ConnectDB()
    console.log(`server is running at port number ${port}`)
})