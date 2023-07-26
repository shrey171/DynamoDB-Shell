const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });
const { createServer } = require("dynamodb-admin");

const dynamodb = new AWS.DynamoDB({
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: "DEFAULTACCESSKEY", // needed if you don't have aws credentials at all in env
  secretAccessKey: "DEFAULTSECRET", // needed if you don't have aws credentials at all in env
});
const dynClient = new AWS.DynamoDB.DocumentClient({ service: dynamodb });

const app = createServer(dynamodb, dynClient);

const host = "localhost";
const port = 8001;
const server = app.listen(port, host);
server.on("listening", () => {
  const address = server.address();
  console.log(`listening on http://localhost:${address.port}`);
});
