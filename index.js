const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const artistRoutes = require("./src/routes/artist");
const authRoutes = require("./src/routes/authorization");
const authMiddleware = require("./src/middleware/authorization");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use("/artist", authMiddleware.verifyToken, artistRoutes);
app.use("/artist", artistRoutes);
app.use("/auth", authRoutes);
app.use("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./src/html/index.html"));
});

app.listen(4000);
