const aws = require("aws-sdk");

exports.handler = async event => {
  try {
    let s3 = new aws.S3({
      region: process.env.AWS_REGION,
      apiVersion: "2006-03-01"
    });

    var params = {
      Bucket: "newborn-trainer-data",
      Key: event.arguments.trainerId + ".txt"
    };

    const response = await s3.getObject(params).promise();

    const responseBody = response.Body.toString().replace(/'/g, '"');

    return responseBody;
  } catch (err) {
    return err;
  }
};
