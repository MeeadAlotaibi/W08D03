const express = require("express");
const { createTask, getTasks } = require("./../controllers/task");
const taskRouter = express.Router();
const authentication = require("../middlewares/authentication");


//////////////////////////////////////////////

taskRouter.post("/task", authentication, createTask);
taskRouter.get("/tasks", authentication, getTasks);

