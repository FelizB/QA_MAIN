import "express-async-errors";
//package imports
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

//custom imports routers
import taskRouter from "./routes/taskRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//middleware imports.........................
import { StatusCodes } from "http-status-codes";
import errorHandling from "./middleware/errorhandler.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

//public path................
import path, { dirname } from "path";
import { fileURLToPath } from "url";

//-------------------------END OF IMPORTS-----------------
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(cookieParser());

//------test APIs -----------------------
app.get("/", (req, res) => {
  res.send("Hello Felix, you are in");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

/*---------------------------------API CALLS----------------------------------------*/
app.use("/api/v1/task", authenticateUser, taskRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

/*---------------------------------End of API CALLS----------------------------------------*/
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});
//// response for unknown requests
app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "not found" });
});

////Handling errors
app.use(errorHandling);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(
      "Connection established to DB, \nServer started successfully on port",
      port,
      ".."
    );
  });
} catch (error) {
  console.log(error.message);
  process.exit(1);
}
