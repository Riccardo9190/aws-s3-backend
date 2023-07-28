const express = require("express");
const { fileController } = require("./controllers/fileController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/images", upload.single("image"), fileController.uploadFile);

module.exports = router;
