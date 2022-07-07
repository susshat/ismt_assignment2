const { Router } = require('express');
const userRoute = require("./userRoute");
const auth =require( "../middleware/auth");

const router = Router();


// router.use("/user", auth, userRoute);
router.use("/user", userRoute);

module.exports= router;
