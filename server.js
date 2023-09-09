//package imports
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

//custom imports routers
import taskRouter from "./routes/taskRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Felix, you are in");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});
/*---------------------------------API CALLS----------------------------------------*/
app.use("/api/v1/task", taskRouter);

//// response for unknown requests
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

////Handling errors

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});
/*---------------------------------End of API CALLS----------------------------------------*/

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("Server started successfully on port", port, "..");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

//
