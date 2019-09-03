module.exports = {
  projectPath: "https://github.com/antoine-doolaeghe/newborn-ml-scripts.git",
  region: "eu-west-1",
  configureRegion: function(region) {
    return `aws configure set default.region ${region}`;
  },
  initEc2User: ["#!/usr/bin/env bash", "cd /home/ubuntu/"],
  initPython3: "source /home/ubuntu/anaconda3/bin/activate python3",
  downloadTrainerProject: function(projectPath) {
    return [
      "rm -rf ml-agents",
      `git clone ${projectPath}`,
      "cd newborn-ml-scripts/"
    ];
  },
  authorizeBuild: "chmod +x newborn.x86_64",
  downloadBuildFromS3: "aws s3 sync s3://trainer-env/ ./",
  installProjectDependency: [
    "cd ml-agents-envs",
    "pip install -e ./",
    "cd ..",
    "cd ml-agents",
    "pip install -e ./",
    "cd .."
  ],
  initTraining: function(newbornId, trainerId) {
    return `/home/ubuntu/anaconda3/envs/python3/bin/mlagents-learn unity-volume/config/trainer_config.yaml --env=./newborn --train --newborn-id=${newbornId} --trainer-id=${trainerId} --no-graphics --api-connection`;
  },
  instanceParams: function(userData) {
    return {
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
  }
};
