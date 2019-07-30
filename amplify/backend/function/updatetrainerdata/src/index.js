const aws = require("aws-sdk");

exports.handler = async event => {
  try {
    let s3 = new aws.S3({
      region: process.env.AWS_REGION,
      apiVersion: "2006-03-01"
    });
    var params = {
      Bucket: "newborn-trainer-data",
      Key: event.key + ".txt",
      Body: event.data
    };
    let s3Response = await s3.upload(params).promise();
    return s3Response.Location;
  } catch (err) {
    console.error(err);
    return err;
  }
};
