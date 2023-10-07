const responses = require("../common/Api_Responses");
const ses = require("../common/ses");
const buyTemplate = require("../templates/buy");

const handler = async (event) => {
  try {
    await ses.send(
      `"Fred Foo 👻" <design@claudiamarin.com>`,
      "carlozalejandro98@gmail.com",
      buyTemplate([
        { quantity: 1, description: "Camisa" },
        { quantity: 12, description: "XBOX ONE Ultra" },
      ]),
      "Grupo Visual Compra"
    );

    return responses._200({ message: "Hello World!" });
  } catch (e) {
    return responses._400({ message: "error" });
  }
};

module.exports.handler = handler;
