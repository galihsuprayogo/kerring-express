const express = require("express");
const multer = require("multer");
const router = express.Router();
const newController = require("../controllers/new");
const storage = require("../config/storage");
const authMiddleware = require("../middleware/authorization");

router.post(
  "/create",
  multer({ storage: storage }).single("image"),
  newController.createNew
);
// router.post("/all", authMiddleware.verifyToken, newController.getAllNew);
router.post("/all", newController.getAllNew);
router.post("/all/read", newController.getAllByRead);
router.post("/update/read", newController.updateReadNew);

module.exports = router;
