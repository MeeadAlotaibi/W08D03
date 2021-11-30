const express = require("express");
const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
  getTaskById
} = require("./../controllers/task");
const taskRouter = express.Router();
const authentication = require("../middlewares/authentication");


//////////////////////////////////////////////

taskRouter.post("/task", authentication, createTask);
taskRouter.get("/tasks", authentication, getTasks);
taskRouter.get("/task/:id", authentication, deleteTask);
taskRouter.put("/task/:id", authentication, updateTask);
taskRouter.get("/todos/:id", authentication, getTaskById);




module.exports = taskRouter;