import express from "express";
import { Email } from "../controller/emailController.js";

const router = express.Router();

router.post('/email',Email);

export default router;