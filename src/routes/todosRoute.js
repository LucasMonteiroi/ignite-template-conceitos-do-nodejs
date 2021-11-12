const router = require("express").Router();
const checkIfExistsUserAccount = require("../middlewares/checkIfExistsUserAccount");
const TodoService = require('../services/todoService');

router.get("/", checkIfExistsUserAccount, (request, response) => {
  TodoService.getTodos(request, response);
});

router.post("/", checkIfExistsUserAccount, (request, response) => {
  TodoService.createTodo(request, response);
});

router.put("/:id", checkIfExistsUserAccount, (request, response) => {
  TodoService.updateTodo(request, response);
});

router.patch("/:id/done", checkIfExistsUserAccount, (request, response) => {
  TodoService.completeTodo(request, response);
});

router.delete("/:id", checkIfExistsUserAccount, (request, response) => {
  TodoService.deleteTodo(request, response);
});

module.exports = router;