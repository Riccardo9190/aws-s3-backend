const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const { uploadFile, getAllFiles, getFileStream } = require("../s3");

const fileController = {
  // POST /images
  uploadFile: async (req, res) => {
    const file = req.file;
    const fileHash = crypto.randomBytes(10).toString("hex");
    const fileName = `${fileHash}-${file.originalname}`;

    const result = await uploadFile(file, fileName);
    await unlinkFile(file.path);
    res.send({ imagePath: `/images/${result.Key}` });
  },

  // GET /images
  getImages: async (req, res) => {
    const contents = await getAllFiles();

    const mappedContents = contents.map((content) => {
      return { Key: content.Key };
    });

    return res.json(mappedContents);
  },

  // GET /images/:key
  getImageByKey: (req, res) => {
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
  },
};

exports.fileController = fileController;
