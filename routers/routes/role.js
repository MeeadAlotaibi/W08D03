const express = require("express");
const { create } = require("../controllers/role");

const roleRouter = express.Router();

roleRouter.post("/create", create);

module.exports = roleRouter;
