const express = require("express");
const { tasks, task, createTask, delatedTasks, updateTask, deleteTask } = require("../controllers/task");
const authentication = require("./../middlewares/authentication");
const authorization = require("./../middlewares/authorization");

const taskRouter = express.Router();

taskRouter.get("/tasks", authentication, authorization, tasks); //just Admin
taskRouter.post("/createTask", authentication, createTask);
taskRouter.get("/", authentication, task);

taskRouter.put("/updateTask/:id", authentication, updateTask);
taskRouter.delete("/delatedTasks/:id", authentication,authorization, delatedTasks); //just Admin
taskRouter.delete("/deleteTask/:id", authentication, deleteTask);


module.exports = taskRouter;
