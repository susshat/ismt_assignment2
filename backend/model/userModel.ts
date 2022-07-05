import { Document, Schema, ObjectId, model } from "mongoose";

export interface IUser extends Document<ObjectId>{
    username:string;
    password:string;
    name:string;
    email:string;
    oldPassword:string;
}

const UserSchema = new Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        oldPassword:{
            type:String,
            required:true,
            default: new Date()
        },
    },
    {
        timestamps:true
    }
);
const User = model<IUser>("User", UserSchema);

export default User;