import mongoose from "mongoose";
import { SUBSIDIARY, PLATFORMS, STATUS } from "../utils/constants.js";
const TaskSchema = new mongoose.Schema(
  {
    ID: String,
    ProductHouse: String,
    ProjectName: String,
    Subsidiary: {
      type: String,
      enum: Object.values(SUBSIDIARY),
      default: SUBSIDIARY.KENYA,
    },
    TestLead: String,
    Platforms: {
      type: String,
      enum: Object.values(PLATFORMS),
      default: PLATFORMS.FINACLE,
    },
    Status: {
      type: String,
      enum: Object.values(STATUS),
      default: STATUS.NOT_STARTED,
    },
    StartDate: { type: String, default: Date() },
    EndDate: { type: String, default: Date() },
    Progress: Number,
    CreatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("task", TaskSchema);
