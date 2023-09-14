import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import { comparePassword, hashedPassword } from "../utils/passwordUtils.js";
import { NotFoundError, UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

//register controller ................................
export const Register = async (req, res) => {
  //const isFirstAccount = (await UserModel.countDocuments()) === 0;
  //req.body.Role = isFirstAccount ? "Admin" : "User";
  const hashedPass = await hashedPassword(req.body.Password);
  req.body.Password = hashedPass;
  const user = await UserModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User Created" });
};

//log in controller ......................................
export const Login = async (req, res) => {
  const User = await UserModel.findOne({ Email: req.body.Email });
  const isValidUser =
    User && (await comparePassword(req.body.Password, User.Password));
  if (!isValidUser) throw new UnauthenticatedError("Invalid Credentials");
  const token = createJWT({ userId: User._id, userRole: User.Role });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

//logout controller..........................................
export const LogOut = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out !" });
};
