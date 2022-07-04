import { Router } from "express";
import userRoute from "./userRoute";
import auth from "../middleware/auth";

const router = Router();


router.use("/user", auth, userRoute);

export default router;
