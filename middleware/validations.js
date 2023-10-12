import "express-async-errors";
import { param, body, validationResult } from "express-validator";
import { PLATFORMS, STATUS, STATION, ROLE } from "../utils/constants.js";
import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("No")) {
          throw new NotFoundError(errorMessages);
        } else if (errorMessages[0].startsWith("Not authorized")) {
          throw new UnauthorizedError(
            "Not authorized to perform this function"
          );
        } else {
          throw new BadRequestError(errorMessages);
        }
      }
      next();
    },
  ];
};
export const validateTaskInput = withValidationErrors([
  body("ProductHouse").notEmpty().withMessage("Product house is required"),
  body("ProjectName").notEmpty().withMessage("Project Name is required"),
  body("Subsidiary").notEmpty().withMessage("select at least one subsidiary"),
  body("TestLead").notEmpty().withMessage("Test lead name is required"),
  body("Progress").notEmpty().withMessage("percentage Progress is required"),
  body("StartDate").notEmpty().withMessage("Start Date is required"),
  body("EndDate").notEmpty().withMessage("End Date is required"),
  body("Platforms")
    .isIn(Object.values(PLATFORMS))
    .withMessage("Invalid platform"),
  body("Status").isIn(Object.values(STATUS)).withMessage("Invalid Status"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");
    const task = await UserModel.findById(value);
    if (!task) throw new NotFoundError("No task found with id");
    const isAdmin = req.user.userRole === "Admin";
    const isOwner = req.user.userId == JsonWebTokenError.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("Not authorized to perform this function");
  }),
]);

export const validateRegister = withValidationErrors([
  body("First_Name").notEmpty().withMessage("First_Name is required"),
  body("Second_Name").notEmpty().withMessage("Second Name is required"),
  body("Last_Name").notEmpty().withMessage("Last name is required"),
  body("Email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (Email) => {
      const User = await UserModel.findOne({ Email });
      if (User) {
        throw new BadRequestError("email already exits");
      }
    }),
  body("Phone_Number")
    .notEmpty()
    .withMessage("Phone Number is required")
    .isNumeric()
    .withMessage("Phone number must be numeric")
    .isLength({ min: 10 })
    .withMessage("Numbers should not be less than 10"),
  body("Mobile_Number")
    .notEmpty()
    .withMessage("Phone Number is required")
    .isNumeric()
    .withMessage("Phone number must be numeric")
    .isLength({ min: 10 })
    .withMessage("Numbers should not be less than 10"),
  body("Password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("Station").isIn(Object.values(STATION)).withMessage("Invalid Station"),
  body("Role").isIn(Object.values(ROLE)).withMessage("Invalid Role"),
  body("PF_Number").notEmpty().withMessage("PF Number is required"),
  body("LinkedIn")
    .notEmpty()
    .withMessage("LinkedIn profile is required")
    .isNumeric()
    .isLength({ max: 5 })
    .withMessage("pf number not correct"),
]);

export const validateLogin = withValidationErrors([
  body("Email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("Password").notEmpty().withMessage("Password is required"),
]);

export const validateUpdateUser = withValidationErrors([
  body("First_Name").notEmpty().withMessage("First_Name is required"),
  body("Second_Name").notEmpty().withMessage("Second Name is required"),
  body("Last_Name").notEmpty().withMessage("Last name is required"),
  body("Email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("invalid email format"),
  /* .custom(async (Email) => {
      const User = await UserModel.findOne({ Email });
      if (User) {
        throw new BadRequestError("email already exits");
      }
    })*/
  body("Phone_Number")
    .notEmpty()
    .withMessage("Phone Number is required")
    .isNumeric()
    .withMessage("Phone number must be numeric")
    .isLength({ min: 10 })
    .isLength({ max: 12 })
    .withMessage("Numbers should not be less than 10"),
  body("Station").isIn(Object.values(STATION)).withMessage("Invalid Station"),
  body("Role").isIn(Object.values(ROLE)).withMessage("Invalid Role"),
]);
