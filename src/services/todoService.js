const { v4: uuidv4 } = require('uuid');

class TodoService {
  getTodos(request, response) {
    const { user } = request;

    return response.status(200).json(user.todos);
  }

  createTodo(request, response){
    const { user } = request;
    const { title, deadline } = request.body;

    const newTodo = {
      id: uuidv4(),
      title,
      deadline: new Date(deadline),
      done: false,
      created_at: new Date()
    }

    user.todos.push(newTodo);

    return response.status(201).json(newTodo);
  }


  updateTodo(request, response){
    const { user } = request;
    const { id } = request.params;
    const { title, deadline } = request.body;

    const todo = user.todos.find((task) => task.id === id);

    if(!todo) {
      return response.status(404).json({ error: 'Todo not found' });
    }

    todo.title = title;
    todo.deadline = new Date(deadline);

    return response.status(200).json(todo);
  }


  deleteTodo(request, response){
    const { user } = request;
    const { id } = request.params

    const todo = user.todos.find((task) => task.id === id);
        
    if(!todo) {
      return response.status(404).json({ error: 'Todo not found' });
    }

    const indexTodo = user.todos.indexOf(todo);

    user.todos.splice(indexTodo, 1);

    return response.status(204).send();
  }


  completeTodo(request, response){
    const { user } = request;
    const { id } = request.params;

    const todo = user.todos.find((task) => task.id === id);

    if(!todo) {
      return response.status(404).json({ error: 'Todo not found' });
    }

    todo.done = true;

    return response.status(200).json(todo);
  }
}

module.exports = new TodoService();