import "express-async-errors";
import { nanoid } from "nanoid";
import TaskSchema from "../models/taskModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";
import mongoose from "mongoose";
import day from "dayjs";
import taskModel from "../models/taskModel.js";

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
export const getTasks = async (req, res) => {
  const { search, ProjectName, Status, ProductHouse, sort } = req.query;
  const ObjectId = {
    CreatedBy: req.user.userId,
  };
  if (search) {
    ObjectId.$or = [
      { ProjectName: { $regex: search, $options: "i" } },
      { Status: { $regex: search, $options: "i" } },
      { ProductHouse: { $regex: search, $options: "i" } },
    ];
  }
  if (Status && Status !== "all") {
    ObjectId.Status = Status;
  }
  if (ProjectName && ProjectName !== "all") {
    ObjectId.ProjectName = ProjectName;
  }
  if (ProductHouse && ProductHouse !== "all") {
    ObjectId.ProductHouse = ProductHouse;
  }
  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "Status",
    "z-a": "-Status",
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  try {
    const tasks = await TaskSchema.find(ObjectId).sort(sortKey);
    res.status(StatusCodes.OK).json({ tasks });
  } catch (error) {
    return error;
  }
};
//---------------get al tasks----------------------
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskSchema.find().sort({ $natural: -1 });
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

//Show Starts-------------------
export const showStats = async (req, res) => {
  let stats = await taskModel.aggregate([
    { $match: { CreatedBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$Status", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    Not_Started: stats["Not Started"] || 0,
    Test_Planning: stats["Test Planning"] || 0,
    Test_Design: stats["Test Design"] || 0,
    Test_Execution: stats["Test Execution"] || 0,
    Test_Reporting: stats["Test Reporting"] || 0,
    Test_SignOff: stats["Test SignOff"] || 0,
    Pilot: stats.Pilot || 0,
    Live: stats.Live || 0,
  };

  let monthlyDeliverable = await taskModel.aggregate([
    { $match: { CreatedBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 8 },
  ]);

  monthlyDeliverable = monthlyDeliverable
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();

  let ProductHouseCategory = await taskModel.aggregate([
    { $unwind: "$ProductHouse" },
    {
      $group: {
        _id: "$ProductHouse",
        count: { $sum: 1 },
      },
    },
  ]);

  let ProductPerDate = await taskModel.aggregate([
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%d/%m/%Y",
            date: "$createdAt",
          },
        },
        count: { $sum: 1 },
      },
    },
  ]);

  let BestPerforming = await taskModel.aggregate([
    {
      $group: {
        _id: "$TestLead",
        completed: { $sum: { $cond: [{ $eq: ["$Pilot", "$Live"] }, 1, 0] } },
        Active: {
          $sum: {
            $cond: [{ $eq: ["$Test_Execution", "$Test_Reporting"] }, 1, 0],
          },
        },
        total: {
          $sum: "$Status",
        },
      },
    },
    { $sort: { updatedAt: -1, TestLead: -1 } },
    { $sort: { completed: -1 } },
    { $limit: 3 },
  ]);
  res.status(StatusCodes.OK).json({
    defaultStats,
    monthlyDeliverable,
    ProductHouseCategory,
    ProductPerDate,
    BestPerforming,
  });
};

//show single user stats-------------------------
export const showSingleUserStats = async (req, res) => {
  try {
    const task = await TaskSchema.find({ CreatedBy: req.user.userId });
    if (!task) throw new NotFoundError("No task found with id", id);

    res.status(StatusCodes.OK).json({ task });
  } catch (error) {
    return error;
  }
};
