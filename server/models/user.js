import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email :{
        type :String,
        required : true,
    },
    password :{
        type :String,
        required : true,
    },
    profilePic:{
        type:String,
        default : "/images/default.png"
    },
    community:[{
        name:{
            type : String,
            required:true,
        },
        id :{
            type : mongoose.Schema.Types.ObjectId,
            required : true,
        },
        role :{
            type : String,
            default : 'member',
        }
    }]
},{
    timestamps : true,
})
donorSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})
const userModel = mongoose.model('user',userSchema)
export default userModel

