const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(router);

app.listen(8080, () => {
  console.log("Listen port 8080");
});
