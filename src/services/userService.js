const { v4: uuidv4 } = require("uuid");

class UserService {
  USERS = [];

  createUser(request, response) {
    const { name, username } = request.body;
    const userAlreadyExists = this.USERS.some((user) => user.username === username);

    if(userAlreadyExists) {
      return response.status(400).json({ error: "User already exists!" });
    }
    const user = {
      id: uuidv4(),
      name,
      username,
      todos: []
    };
    
    this.USERS.push(user);

    response.status(201).json(user);
  }
}

module.exports = new UserService();
