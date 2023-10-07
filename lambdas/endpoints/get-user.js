const responses = require("../common/Api_Responses");

const handler = async (event) => {
  const id = event?.pathParameters?.ID;

  if (!id) return responses._400({ message: "Id is required!" });

  const user = data[id];

  if (!user) return responses._400({ message: "User not found" });

  return responses._200(user);
};

module.exports.handler = handler;

const data = {
  1: { name: "Carlos Arrieta", age: 25, job: "Developer" },
  2: { name: "Claudia Arrieta", age: 27, job: "Communication Expert" },
  3: { name: "Roberto fonseca", age: 35, job: "Body Builder" },
};
