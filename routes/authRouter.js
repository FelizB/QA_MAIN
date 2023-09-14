import { Router } from "express";
const router = Router();
import { Register, Login, LogOut } from "../controllers/AuthController.js";
import { validateRegister, validateLogin } from "../middleware/validations.js";

router.post("/register", validateRegister, Register);
router.post("/login", validateLogin, Login);
router.post("/logout", LogOut);

export default router;
