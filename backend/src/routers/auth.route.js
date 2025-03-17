import { Router } from "express";
import { register,login } from "../controllers/auth.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
const authRouter = Router()
authRouter.post('/register',register)
authRouter.post('/login',login)
export {authRouter}