import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUser } from "../middleware/validations.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
<<<<<<< HEAD
import multer from "multer";
=======
import { upload } from "../middleware/multermiddleware.js";
>>>>>>> a7c3e6a28578bf3c9cca96f9cadabb50b81d2357

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});
upload = multer({ storage });
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
