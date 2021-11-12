const router = require("express").Router();
const UserService = require('../services/userService');

router.post('/', (request, response) => {
  UserService.createUser(request, response);
});

module.exports = router;