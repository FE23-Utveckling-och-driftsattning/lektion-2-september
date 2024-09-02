const { sendResponse } = require('../../responses/index');

const todos = [
  { id: 1, todo: 'Köp kaffe' },
  { id: 2, todo: 'Köp kaka' },
  { id: 3, todo: 'Brygg kaffe' },
  { id: 4, todo: 'Drick kaffe' },
];

module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const todoText = JSON.parse(event.body);

  todos.forEach((todo) => {
    if (todo.id === parseInt(id)) todo.todo = todoText.todo;
  });

  return sendResponse(todos);
};
