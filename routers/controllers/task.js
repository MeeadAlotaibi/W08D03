const taskModel = require("./../../db/models/task");

/////////// Create New Task ///////////

const createTask = (req, res) => {
  const newTask = new taskModel({ name: req.body.name, user: req.token.id });
  newTask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
///////////// Get All the  Tasks That  aren't Deleted ///////////////////

const getTasks = (req, res) => {
  taskModel
    .find({ isDeleted: false, user: req.token.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

///////////////// Delete Task //////////////////////////////

const deleteTask = (req, res) => {
  const id  = req.params.id;
  taskModel
    .findByIdAndUpdate(id, {
      $set: {
        isDeleted: true,
      },
    })
    .then((result) => {
      if (result) {
        res.status(200).json("Task is deleted");
      } else {
        res.status(404).json("user does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

////////////تصدير الفنكشنز ///////////
module.exports = { createTask, getTasks, deleteTask };
