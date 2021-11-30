const express = require("express");
const { createTask, getTasks, deleteTask } = require("./../controllers/task");
const taskRouter = express.Router();
const authentication = require("../middlewares/authentication");


//////////////////////////////////////////////

taskRouter.post("/task", authentication, createTask);
taskRouter.get("/tasks", authentication, getTasks);
taskRouter.get("/task/:id", authentication, deleteTask);



module.exports = taskRouter;