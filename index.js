const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const userRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/authorization");
const authMiddleware = require("./src/middleware/authorization");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", authMiddleware.verifyToken, userRoutes);
app.use("/auth", authRoutes);
app.use("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./src/html/index.html"));
});

app.listen(4000);
