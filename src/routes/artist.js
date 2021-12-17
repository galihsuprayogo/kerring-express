const express = require("express");
const multer = require("multer");
const upload = multer();
const router = express.Router();
const artistController = require("../controllers/artist");

router.post("/create", upload.none(), artistController.createArtist);
router.get("/all", artistController.getArtist);

module.exports = router;
