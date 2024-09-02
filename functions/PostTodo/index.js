const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  try {
    await db.put({
      TableName: 'my-todos',
      Item: {
        todoId: body.id,
        todo: body.todo,
        done: false,
      },
    });
  } catch (error) {
    console.log(error);

    return sendError(401, { message: 'Could not create todo', error: error });
  }

  return sendResponse({ message: 'Todo created!' });
};
