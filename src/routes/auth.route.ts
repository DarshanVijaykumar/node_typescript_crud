import express from "express";
import { signup, login, logout } from "../controllers/auth.controller";

const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/logout", logout);

export default authRoutes;
