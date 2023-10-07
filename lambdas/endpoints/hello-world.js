const responses = require("../common/Api_Responses");

const handler = async (event) => {
  return responses._200({ message: "Hello World!" });
};

module.exports.handler = handler;
