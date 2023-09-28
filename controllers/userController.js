import { StatusCodes } from "http-status-codes";
import UserSchema from "../models/UserModel.js";
import TaskSchema from "../models/taskModel.js";
import { promises as fs } from "fs";
import cloudinary from "cloudinary";

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
  const obj = { ...req.body };
  delete obj.Password;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    obj.avatar = response.secure_url;
    obj.avatarPublicId = response.public_id;
  }
  const updatedUser = await UserSchema.findByIdAndUpdate(req.user.userId, obj);
  if (req.file && obj.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "Update user" });
};
