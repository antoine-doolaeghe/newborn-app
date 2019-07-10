const aws = require("aws-sdk");
aws.config.update({ region: "eu-west-1" });
const ddb = new aws.DynamoDB.DocumentClient();
const newbornTableName = "Summary-cgfnpw6cc5a3hdvevr6vfbvxlq-dev";

exports.handler = function(event, context) {
  var hashKey = "id";
  var rangeKey = null;
  var scanParams = {
    TableName: newbornTableName
  };

  ddb.scan(scanParams, function(err, data) {
    if (err) return err;
    // an error occurred
    else {
      data.Items.forEach(function(obj, i) {
        var params = {
          TableName: scanParams.TableName,
          Key: buildKey(obj),
          ReturnValues: "NONE",
          ReturnConsumedCapacity: "NONE",
          ReturnItemCollectionMetrics: "NONE"
        };

        ddb.delete(params, function(err, data) {
          if (err) return err;
          // an error occurred
          else return data; // successful response
        });
      });
    }
  });

  function buildKey(obj) {
    var key = {};
    key[hashKey] = obj[hashKey];
    if (rangeKey) {
      key[rangeKey] = obj[rangeKey];
    }

    return key;
  }
};
