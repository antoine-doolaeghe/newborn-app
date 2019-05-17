const aws = require("aws-sdk");
aws.config.update({ region: "eu-west-1" });
const ddb = new aws.DynamoDB.DocumentClient();
const newbornTableName = "Newborn-cgfnpw6cc5a3hdvevr6vfbvxlq-dev";

exports.handler = function(event, context) {
  const trainingMessage = event.Records[0].Sns.Message;
  const params = {
    TableName: newbornTableName,
    Key: {
      id: "8425280452053986835"
    },
    UpdateExpression: "set trainingStatus = :s",
    ExpressionAttributeValues: {
      ":s": trainingMessage
    },
    ReturnValues: "UPDATED_NEW"
  };
  ddb.update(params, function(err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
};
