const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const userRoutes = require("./src/routes/users");

app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/html/index.html'));
});

app.listen(4000);
