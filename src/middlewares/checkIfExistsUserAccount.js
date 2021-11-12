const { USERS: database } = require('../services/userService');

module.exports = function checkIfExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = database.find((user) => user.username == username);

  if(!user) {
    return response.status(400).json({ error: "User not found" });
  }

  request.user = user;

  return next();
};