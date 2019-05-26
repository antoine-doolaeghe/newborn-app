var AWS = require("aws-sdk");
// Load credentials and set region from JSON file
AWS.config.update({ region: "eu-west-1" });
exports.handler = function(event, context, callback) {
  const instanceId = event.arguments.instanceId;
  var params = {
    InstanceIds: [instanceId]
  };
  new AWS.EC2({ apiVersion: "2016-11-15" }).terminateInstances(params, function(
    err,
    data
  ) {
    if (err) {
      callback(err, err.stack);
    } else {
      callback(null, data);
    }
  });
};
