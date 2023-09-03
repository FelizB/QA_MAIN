import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";

let tasks = [
  {
    id: nanoid(),
    productHouse: "Enterprise Digitization",
    AffectedPlatform: ["BSH", "Finacle"],
    projectName: "Known Agent",
    testLead: "Felix Bosire",
    status: "planning",
    progress: 0,
  },
  {
    id: nanoid(),
    productHouse: "Telcos",
    AffectedPlatform: ["channel", "Finacle"],
    projectName: "Airtel",
    testLead: "Felix Bosire",
    status: "planning",
    progress: 0,
  },
  {
    id: nanoid(),
    productHouse: "Borrow",
    AffectedPlatform: ["Finacle"],
    projectName: "Telecommunication",
    testLead: "Felix Bosire",
    status: "planning",
    progress: 0,
  },
];

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
//CREATE or ADD TASK
app.post("/api/v1/addTasks", (req, res) => {
  const {
    productHouse,
    AffectedPlatform,
    projectName,
    testLead,
    status,
    progress,
  } = req.body;
  try {
    if (
      !productHouse ||
      !AffectedPlatform ||
      !projectName ||
      !testLead ||
      !status ||
      !progress
    ) {
      return res.status(400).json({
        msg: "please provide all parameters: product house, project name, Affected platforms, test lead name, status and progress",
      });
    }
    const id = nanoid(5);
    const task = {
      id,
      productHouse,
      AffectedPlatform,
      projectName,
      testLead,
      status,
      progress,
    };
    tasks.push(task);
    res.status(201).json({ task });
  } catch (error) {
    return error;
  }
});

//GET ALL TASKS
app.get("/api/v1/allTasks", (req, res) => {
  res.status(200).json({ tasks });
});

////GET SINGLE TASKS
app.get("/api/v1/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({ msg: "no task with id" });
  } else {
    res.status(200).json({ task });
  }
});

////EDIT SINGLE TASKS
app.patch("/api/v1/editTask/:id", (req, res) => {
  const { projectName, testLead, status, progress } = req.body;
  try {
    if (!projectName || !testLead || !status || !progress) {
      res.status(400).json({
        msg: "please provide all these parameters: project name, test lead name, status and progress",
      });
      return;
    } else {
      const { id } = req.params;
      const task = tasks.find((task) => task.id === id);
      if (!task) {
        res.status(404).json({ msg: "no task with id", id });
      } else {
        task.status = status;
        task.progress = progress;
        res.status(200).json({ msg: "task modified successfully", task });
      }
    }
  } catch (error) {
    return error.message;
  }
});

////DELETE SINGLE TASKS
app.delete("/api/v1/deleteTask/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({ msg: "no task with id", id });
  } else {
    const newTasks = tasks.filter((task) => task.id !== id);
    tasks = newTasks;
    res.status(200).json({ msg: "task deleted successfully" });
  }
});

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

app.listen(port, () => {
  console.log("Server started successfully on port", port, "..");
});
