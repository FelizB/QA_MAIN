import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUser } from "../middleware/validations.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get(
  "/Admin/app-starts",
  authorizePermissions("Admin"),
  getApplicationStats
);
router.patch("/update-user", validateUpdateUser, updateUser);

export default router;
