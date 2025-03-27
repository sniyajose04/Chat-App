import express from "express";
import {login,logout,signup,updateProfile} from "../constrollers/auth.controller.js";
import {protectRoute} from "../midddleware/auth.middleware.js"

const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

router.put("/update-profile",protectRoute,updateProfile)

export default router;