const route = require("express").Router();
const todosRoute = require("./todosRoute");
const usersRoute = require("./usersRoute");

route.use('/users', usersRoute);
route.use('/todos', todosRoute);

module.exports = route;