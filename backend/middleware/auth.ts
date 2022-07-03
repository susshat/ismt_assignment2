import { RequestHandler } from "express";

const auth: RequestHandler=  async (req, res, next) =>{
try {
    
    
} catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
}
}

export default auth;