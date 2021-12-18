const express = require("express");
const multer = require("multer");
const router = express.Router();
const newController = require("../controllers/new");
const storage = require("../config/storage");

router.post(
  "/create",
  multer({ storage: storage }).single("image"),
  newController.createNew
);

module.exports = router;
