
const User = require ("../model/userModel");

const auth=  async (req, res, next) =>{
    // console.log(req,'tr')
try {
    const userId = req.session.userId;
if(!userId){
    return res.status(409).json({ message: "User not authenticated" });
}
    const user = await User.findOne({
        username: req.body.uername
    })
    if(user) {
        res.locals.user= user ;
        next();
    }else{
        return res.status(409).json({ message: "User not authenticated" });
    }
} catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
}
}

module.exports = auth;