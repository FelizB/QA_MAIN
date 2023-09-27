import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUser } from "../middleware/validations.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multermiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get(
  "/Admin/app-starts",
  authorizePermissions("Admin"),
  getApplicationStats
);
router.patch(
  "/update-user",
  upload.single("avatar"),
  validateUpdateUser,
  updateUser
);

export default router;
