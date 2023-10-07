const responses = require("../common/Api_Responses");
const s3 = require("../common/s3");

const bucketName = process.env.bucketName;

const handler = async (event) => {
  console.log({ event });
  const fileName = event?.pathParameters?.fileName;
  if (!fileName) return responses._400({ message: "FileName is required" });

  const data = await s3.get(bucketName, fileName);

  return responses._200({ data });
};

module.exports = { handler };
