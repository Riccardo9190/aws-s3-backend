require("dotenv").config();

const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.AWS_BUCKET_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

function uploadFile(file, fileName) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: fileName,
  };

  return s3.upload(uploadParams).promise();
}

function getAllFiles() {
  return new Promise((resolve, reject) => {
    s3.listObjectsV2({ Bucket: bucketName }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Contents);
      }
    });
  });
}

function getFileStream(fileKey) {
  const downloadParams = {
    Bucket: bucketName,
    Key: fileKey,
  };

  return s3.getObject(downloadParams).createReadStream();
}

exports.uploadFile = uploadFile;
exports.getAllFiles = getAllFiles;
exports.getFileStream = getFileStream;
