const responses = require("../common/Api_Responses");
const Dynamo = require("../common/dynamoDb");

const tableName = process.env.tableName;

const handler = async (event) => {
  console.log({ event });
  const id = event?.pathParameters?.ID;

  if (!id) return responses._400({ message: "Id is required!" });

  const user = await Dynamo.get(tableName, id).catch((e) => {
    console.log("dynamo error", e);
    return null;
  });

  if (!user) return responses._400({ message: "User Sccore not found!" });

  return responses._200(user);
};

module.exports = { handler };
