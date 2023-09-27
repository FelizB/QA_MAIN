import { StatusCodes } from "http-status-codes";
import UserSchema from "../models/UserModel.js";
import TaskSchema from "../models/taskModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await UserSchema.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const Users = await UserSchema.countDocuments();
  const Tasks = await TaskSchema.countDocuments();
  res.status(StatusCodes.OK).json({ Users, Tasks });
};
export const updateUser = async (req, res) => {
  console.log(req.file);
  const obj = { ...req.body };
  delete obj.Password;
  const updatedUser = await UserSchema.findByIdAndUpdate(
    req.user.userId,
    req.body
  );
  res.status(StatusCodes.OK).json({ msg: "Update user" });
};
