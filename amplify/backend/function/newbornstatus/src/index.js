const aws = require("aws-sdk");
aws.config.update({ region: "eu-west-1" });
const ddb = new aws.DynamoDB.DocumentClient();
const newbornTableName = "Newborn-cgfnpw6cc5a3hdvevr6vfbvxlq-dev";

exports.handler = function(event, context) {
  const newbornId = JSON.parse(event.Records[0].Sns.Message).newbornId;
  const trainingMessage = JSON.parse(event.Records[0].Sns.Message).status;
  const params = {
    TableName: newbornTableName,
    Key: {
      id: newbornId
    },
    UpdateExpression: "set developmentStage = :s",
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
