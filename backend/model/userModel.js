const { Document, Schema, ObjectId, model } =require("mongoose") ;


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
const User = model>("User", UserSchema);

module.exports = User;