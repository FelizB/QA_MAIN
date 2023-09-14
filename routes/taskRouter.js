import { Router } from "express";
const router = Router();

import {
  addTasks,
  getAllTasks,
  getSingleTask,
  deleteSingleTask,
  updateSingleTask,
  deleteTask,
} from "../controllers/taskController.js";
import {
  validateTaskInput,
  validateIdParam,
} from "../middleware/validations.js";
router
  .route("/")
  .get(getAllTasks)
  .post(validateTaskInput, addTasks)
  .delete(deleteTask);
router
  .route("/:id")
  .get(validateIdParam, getSingleTask)
  .patch(validateIdParam, updateSingleTask)
  .delete(validateIdParam, deleteSingleTask);

export default router;
