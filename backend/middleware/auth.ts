import { RequestHandler } from "express";
import User from "../model/userModel";

const auth: RequestHandler=  async (req, res, next) =>{
try {
    const userId = req.session.userId;
if(!userId){
    return res.status(409).json({ message: "User not authenticated" });
}
    const user = await User.findOne({
        username: req.body.uername
    })
    if(user) {
        res.locals.user= user as any;
        next();
    }else{
        return res.status(409).json({ message: "User not authenticated" });
    }
} catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
}
}

export default auth;