import { Router } from 'express';
import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
const userRouter = Router();

userRouter.post("/signup",async (req,res)=>{
    const user = req.body;
    const newUser = new UserModel(user);
    try{
        await newUser.save();
        res.status(200).json({success:true,message:"user successfully created!"})
    }catch(err){
        res.status(500).json({success:false,message:"user not created!"})
    }
})
userRouter.post('/login',async (req,res)=>{
    //empty
})
export default userRouter;