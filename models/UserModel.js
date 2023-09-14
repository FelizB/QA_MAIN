import mongoose from "mongoose";
import { ROLE, STATION } from "../utils/constants.js";
const UserSchema = new mongoose.Schema({
  First_Name: String,
  Second_Name: String,
  Last_Name: String,
  Email: String,
  Phone_Number: Number,
  Password: String,
  Station: {
    type: String,
    enum: Object.values(STATION),
    default: STATION.EQUITY_INTERNAL,
  },
  Role: {
    type: String,
    enum: Object.values(ROLE),
    default: ROLE.USER,
  },
});

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.Password;
  return obj;
};

export default mongoose.model("User", UserSchema);
