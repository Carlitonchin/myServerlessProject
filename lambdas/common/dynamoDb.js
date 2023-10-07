const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} = require("@aws-sdk/lib-dynamodb");

const region = process.env.region;

const client = new DynamoDBClient({ region });
const docClient = DynamoDBDocumentClient.from(client);

const Dynamo = {
  get: async (TableName, ID) => {
    console.log("Get", { TableName, ID });
    const command = new GetCommand({
      TableName,
      Key: {
        ID,
      },
    });
    const response = await docClient.send(command).catch((e) => {
      console.log(e);
      throw new Error(
        `An error ocurred reading ID = ${ID} from ${TableName} table`
      );
    });
    if (!response?.Item)
      throw new Error(`Data from ${TableName} table with ID = ${ID} not found`);

    return response?.Item;
  },

  post: async (TableName, Item) => {
    console.log("Create", { TableName, Item });

    const command = new PutCommand({
      TableName,
      Item,
    });

    const response = await docClient.send(command).catch((e) => {
      console.log(e);
      throw new Error(
        `An error ocurred trying to put the item ${JSON.stringify(
          Item
        )}} on ${TableName} table`
      );
    });

    return response;
  },
};

module.exports = Dynamo;
