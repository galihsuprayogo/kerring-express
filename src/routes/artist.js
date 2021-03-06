const express = require("express");
const multer = require("multer");
const router = express.Router();
const artistController = require("../controllers/artist");
const storage = require("../config/storage");
const authMiddleware = require("../middleware/authorization");

router.post(
  "/create",
  multer({ storage: storage }).single("image"),
  artistController.createArtist
);
router.get("/all", authMiddleware.verifyToken, artistController.getArtist);

module.exports = router;
