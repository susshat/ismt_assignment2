import { Router } from "express";
import { changePassword, createUser, forgetPassword, loginUser, logOut, refresh } from "../controller/userController";
import auth from "../middleware/auth";

const router = Router();

 router.post("/register", createUser);
 router.post("/login", loginUser);
 router.post("/changePassword", changePassword);
 router.post("/forgetPassword", forgetPassword);
 router.post("/logout", logOut);
 router.post("/profile",auth, refresh);


 export default router;