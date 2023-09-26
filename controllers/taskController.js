import "express-async-errors";
import { nanoid } from "nanoid";
import TaskSchema from "../models/taskModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

//Add Tasks functionality.........................
export const addTasks = async (req, res) => {
  req.body.CreatedBy = req.user.userId;
  const {
    ProductHouse,
    Platforms,
    ProjectName,
    Subsidiary,
    TestLead,
    Status,
    Progress,
    StartDate,
    EndDate,
    CreatedBy,
  } = req.body;
  console.log(Subsidiary);
  try {
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
      StartDate,
      EndDate,
      CreatedBy,
    });

    res.status(StatusCodes.CREATED).json({ task });
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Get All Tasks functionality.....................
export const getAllTasks = async (req, res) => {
  try {
    console.log(req.user);
    const tasks = await TaskSchema.find({ CreatedBy: req.user.userId });
    res.status(StatusCodes.OK).json({ tasks });
  } catch (error) {
    return error;
  }
};

//Get single Task functionality .....................
export const getSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await TaskSchema.findById(id);
    if (!task) throw new NotFoundError("No task found with id", id);

    res.status(StatusCodes.OK).json({ task });
  } catch (error) {
    return error;
  }
};

//Update / Edit single Task..........................
export const updateSingleTask = async (req, res) => {
  const { ProjectName, TestLead, Status, Progress } = req.body;

  if (!req.body) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: "please provide all these parameters: project name, test lead name, status and progress",
    });
  } else {
    try {
      const { id } = req.params;
      const updateTask = await TaskSchema.findByIdAndUpdate(id, req.body);

      if (!updateTask) throw new NotFoundError("No task found with id", id);

      res
        .status(StatusCodes.OK)
        .json({ msg: "task modified successfully", TaskSchema: updateTask });
    } catch (error) {
      return error;
    }
  }
};

//Delete Single Task with db param id functionality .......................
export const deleteSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await TaskSchema.findByIdAndDelete(id);
    if (!deletedTask) throw new NotFoundError("No task found with id", id);

    res.status(StatusCodes.OK).json({ msg: "task deleted successfully" });
  } catch (error) {
    return error.message;
  }
};

//Delete Single Task with body id functionality .......................
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await TaskSchema.findOneAndDelete({ ID: req.body.ID });
    if (!deletedTask) throw NotFoundError("No task found with id");

    res.status(StatusCodes.OK).json({ msg: "task deleted successfully" });
  } catch (error) {
    return error.message;
  }
};
