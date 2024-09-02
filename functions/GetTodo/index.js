const { sendResponse } = require('../../responses/index');
const { db } = require('../../services/index');

module.exports.handler = async (event) => {
  try {
    const { Items } = await db.scan({
      TableName: 'my-todos',
    });

    return sendResponse(Items);
  } catch (error) {}
};
