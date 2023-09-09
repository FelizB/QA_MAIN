import { Router } from "express";
const router = Router();

import {
  addTasks,
  getAllTasks,
  getSingleTask,
  deleteSingleTask,
  updateSingleTask,
} from "../controllers/taskController.js";

router.route("/").get(getAllTasks).post(addTasks);
router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateSingleTask)
  .delete(deleteSingleTask);

export default router;
