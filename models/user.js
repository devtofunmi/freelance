import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    firstName:{
        type:string,
        required:true,
    },
    lastName:{
        type:string,
        required:true,
    },
    email:{
        type:string,
        required:true,
    },
    password:{
        type:string,
        required:true,
    },
},
{timestamps: true}
)

const User = models.User || mongoose.model("User", userSchema);
export default User;