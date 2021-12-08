const userModel = require("./../../db/models/user");
const taskModel = require("./../../db/models/task");

//////////////////// Show all tasks for Admin ///////////////////////

const tasks = (req, res) => {
  taskModel
    .find({ isDel: { $eq: false } })
    .populate("byUser")
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

//////////////////////// Show user task  /////////////////////////////

const task = (req, res) => {
  taskModel
    .find({ byUser: req.token.id, isDel: { $eq: false } })
    .then((result) => {
      if (result.length > 0) {
        res.status(201).send(result);
      } else {
        res.status(404).send("There is no tasks");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

////////////////////////// deleted task for Admin /////////////////////////////
const delatedTasks = (req, res) => {
  const { id } = req.params;

  taskModel
    .findOneAndUpdate(
      { _id: id, isDel: { $eq: false } },
      { isDel: true },
      { new: true }
    )
    .exec()
    .then((result) => {
      if (result) {
        res.status(201).send(result);
      } else {
        res.status(404).send("It's deleted");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

////////////////////////// Add task ///////////////////////////////
const createTask = (req, res) => {
  const { name } = req.body;

  const newTask = new taskModel({
    name,
    byUser: req.token.id,
  });

  newTask
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

//////////////////////// update task //////////////////////////////////
const updateTask = (req, res) => {
  const { id } = req.params;
  const { name, isDel } = req.body;

  taskModel
    .findOneAndUpdate(
      { _id: id, byUser: req.token.id, isDel: { $eq: false } },
      { name, isDel },
      { new: true }
    )
    .exec()
    .then((result) => {
      if (result) {
        res.status(201).send(result);
      } else {
        res.status(404).send("Failed update");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

///////////////// delete task///////////////////////////////
const deleteTask = (req, res) => {
  const { id } = req.params;

  taskModel
    .findOneAndUpdate(
      { _id: id, byUser: req.token.id, isDel: { $eq: false } },
      { isDel: true },
      { new: true }
    )
    .exec()
    .then((result) => {
      if (result) {
        res.status(201).send(result);
      } else {
        res.status(404).send("It's deleted");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  tasks,
  createTask,
  task,
  delatedTasks,
  updateTask,
  deleteTask,
};
