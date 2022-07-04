import { RequestHandler } from "express";

const auth: RequestHandler=  async (req, res, next) =>{
try {
    // const userId = req.session.userId;

    // if(userId) {
    //     next();
    // }else{
    //     return res.status(409).json({ message: "User not authenticated" });
    // }
} catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
}
}

export default auth;