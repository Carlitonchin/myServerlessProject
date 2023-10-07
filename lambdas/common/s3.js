const {
  PutObjectCommand,
  GetObjectCommand,
  S3Client,
} = require("@aws-sdk/client-s3");

const client = new S3Client({});

const s3 = {
  get: async (Bucket, fileName) => {
    console.log(Bucket, fileName);
    const command = new GetObjectCommand({
      Bucket,
      Key: fileName,
    });

    console.log("voyyyy");
    const newData = await client.send(command).catch((e) => {
      console.log(`Error getting ${fileName} from bucket ${Bucket}`);
      console.log(e);
      throw new Error("Error writing s3", e);
    });
    console.log("termine");
    return newData.Body.transformToString();
  },

  write: async (Bucket, fileName, data) => {
    const buffer = Buffer.from(data, "binary");
    const command = new PutObjectCommand({
      Bucket,
      Key: fileName,
      Body: buffer,
    });

    const newData = await client.send(command).catch((e) => {
      console.log(`Error saving ${fileName} on bucket ${Bucket}`);
      console.log({ data });

      throw new Error("Error writing s3", e);
    });

    return newData;
  },
};

module.exports = s3;
