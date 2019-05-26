var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });

exports.handler = function(event, context, callback) {
  const newbornId = event.arguments.newbornId;

  const commands = [
    "#!/usr/bin/env bash",
    "cd /home/ubuntu/",
    "rm -rf ml-agents",
    "git clone https://github.com/antoine-doolaeghe/newborn-ml-scripts.git",
    "cd newborn-ml-scripts/",
    "aws s3 sync s3://trainer-env/ ./",
    "aws configure set default.region eu-west-1",
    "source /home/ubuntu/anaconda3/bin/activate python3",
    "python -V",
    "pip -V",
    "cd ml-agents-envs",
    "pip install -e ./",
    "cd ..",
    "cd ml-agents",
    "pip install -e ./",
    "cd ..",
    "ls",
    "chmod +x newborn.x86_64",
    `/home/ubuntu/anaconda3/envs/python3/bin/mlagents-learn unity-volume/config/trainer_config.yaml --env=./newborn --train --newborn-id=${newbornId} --no-graphics --api-connection`
  ];

  const userData = new Buffer(commands.join("\n")).toString("base64");

  var instanceParams = {
    ImageId: "ami-0952d56368dc0e8fc",
    InstanceType: "t2.large",
    KeyName: "ec2-test1",
    MinCount: 1,
    MaxCount: 1,
    UserData: userData,
    SecurityGroupIds: ["sg-0078d1bf3f03c16b2"],
    IamInstanceProfile: {
      Name: "ec2-to-s3"
    }
  };

  return new AWS.EC2({ apiVersion: "2016-11-15" }).runInstances(
    instanceParams,
    (err, data) => {
      if (err) {
        callback(err, err.stack);
      } else {
        callback(null, data.Instances[0].InstanceId);
      }
    }
  );
};
