const aws = require("aws-sdk");
const ddb = new aws.DynamoDB({ apiVersion: "2012-10-08" });
const userTableName = "User-cgfnpw6cc5a3hdvevr6vfbvxlq-dev";

exports.handler = function(event, context) {
  const userAttributes = event.request.userAttributes;
  var userparams = {
    TableName: userTableName,
    Item: {
      id: { S: userAttributes.sub },
      Email: { S: userAttributes.email }
    }
  };

  ddb.putItem(userparams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Exit", data);
      context.done(null, event);
    }
  });
};
