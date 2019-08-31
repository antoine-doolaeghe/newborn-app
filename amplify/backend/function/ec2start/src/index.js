var AWS = require("aws-sdk");
var config = require("./config.js");
AWS.config.update({ region: "eu-west-1" });

exports.handler = function(event, context, callback) {
  const newbornId = event.arguments.newbornId;

  const commands = [
    ...config.initEc2User,
    ...config.downloadTrainerProject(config.projectPath),
    config.downloadBuildFromS3,
    config.configureRegion(config.region),
    config.initPython3,
    ...config.installProjectDependency,
    config.authorizeBuild,
    config.initTraining(newbornId)
  ];

  const userData = new Buffer(commands.join("\n")).toString("base64");

  return new AWS.EC2({ apiVersion: "2016-11-15" }).runInstances(
    config.instanceParams(userData),
    (err, data) => {
      if (err) {
        callback(err, err.stack);
      } else {
        callback(null, data.Instances[0].InstanceId);
      }
    }
  );
};
