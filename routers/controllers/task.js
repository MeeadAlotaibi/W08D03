const taskModel = require("./../../db/models/task");

///////////

const createTask = (req, res) => {
  const newTask = new todoModel({ name: req.body.name, user: req.token.id });
  newTask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

////////////تصدير الفنكشنز ///////////
module.exports = { createTask };
