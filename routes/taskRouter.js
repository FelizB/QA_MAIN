import { Router } from "express";
const router = Router();

import {
  addTasks,
  getAllTasks,
  getSingleTask,
  deleteSingleTask,
  updateSingleTask,
  deleteTask,
  showStats,
  showSingleUserStats,
  getTasks,
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
router.route("/UserTasks").get(getTasks);
router.route("/stats").get(showStats);
router.route("/stats/:id").get(showSingleUserStats);
router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateSingleTask)
  .delete(deleteSingleTask);

export default router;
