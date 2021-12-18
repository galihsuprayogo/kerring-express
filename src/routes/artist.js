const express = require("express");
const multer = require("multer");
const router = express.Router();
const artistController = require("../controllers/artist");
const storage = require("../config/storage");

router.post(
  "/create",
  multer({ storage: storage }).single("image"),
  artistController.createArtist
);
router.get("/all", artistController.getArtist);

module.exports = router;
