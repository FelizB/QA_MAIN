import { nanoid } from "nanoid";
import TaskSchema from "../models/taskModel.js";
import { StatusCodes } from "http-status-codes";

//Add Tasks functionality.........................
export const addTasks = async (req, res) => {
  const {
    ProductHouse,
    Platforms,
    ProjectName,
    Subsidiary,
    TestLead,
    Status,
    Progress,
  } = req.body;
  try {
    if (
      !ProductHouse ||
      !Platforms ||
      !ProjectName ||
      !Subsidiary ||
      !TestLead ||
      !Status ||
      !Progress
    ) {
      return res.status(400).json({
        msg: "please provide all parameters",
      });
    } else {
      const ID = nanoid(5).toString();
      const task = await TaskSchema.create({
        ID,
        ProductHouse,
        Platforms,
        ProjectName,
        Subsidiary,
        TestLead,
        Status,
        Progress,
      });

      res.status(StatusCodes.CREATED).json({ task });
    }
  } catch (error) {
    return error.message;
  }
};

// Get All Tasks functionality.....................
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskSchema.find({});
    res.status(StatusCodes.OK).json({ tasks });
  } catch (error) {
    return error.message;
  }
};

//Get single Task functionality .....................
export const getSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await TaskSchema.findById(id);
    if (!task) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: "no task with id ", id });
    } else {
      res.status(StatusCodes.OK).json({ task });
    }
  } catch (error) {
    return error.message;
  }
};

//Update / Edit single Task..........................
export const updateSingleTask = async (req, res) => {
  const { ProjectName, TestLead, Status, Progress, StartDate, EndDate } =
    req.body;
  if (!ProjectName & !TestLead & !Status & !Progress & !StartDate & !EndDate) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: "please provide all these parameters: project name, test lead name, status and progress",
    });
  } else {
    try {
      const { id } = req.params;
      const updateTask = await TaskSchema.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateTask) {
        res.status(StatusCodes.NOT_FOUND).json({ msg: "no task with id", id });
      } else {
        res
          .status(StartDate.OK)
          .json({ msg: "task modified successfully", TaskSchema: updateTask });
      }
    } catch (error) {
      return error.message;
    }
  }
};

//Delete Single Task functionality .......................
export const deleteSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await TaskSchema.findOneAndDelete(id);
    if (!deletedTask) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: "no task ith id", id });
    } else {
      res.status(StatusCodes.OK).json({ msg: "task deleted successfully" });
      console.log;
    }
  } catch (error) {
    return error.message;
  }
};
