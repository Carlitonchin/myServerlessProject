const responses = require("../common/Api_Responses");
const s3 = require("../common/s3");

const bucketName = process.env.bucketName;

const handler = async (event) => {
  console.log({ event });
  const body = event?.body;
  const fileName = event?.pathParameters?.fileName;
  if (!fileName) return responses._400({ message: "FileName is required" });
  if (!body) return responses._400({ message: "Body is required" });

  await s3.write(bucketName, fileName, body);
  return responses._200({ message: "File upload succesfully" });
};

module.exports = { handler };
