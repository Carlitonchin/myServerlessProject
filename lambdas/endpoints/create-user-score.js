const responses = require("../common/Api_Responses");
const Dynamo = require("../common/dynamoDb");

const tableName = process.env.tableName;

const handler = async (event) => {
  console.log({ event });
  const body = event?.body;

  if (!body) return responses._400({ message: "No body" });

  await Dynamo.post(tableName, JSON.parse(body));
  return responses._200({ message: "User created sucessfully" });
};

module.exports = { handler };
