const express = require("express");
const authController = require("../controllers/authorization");
const authMiddleware = require("../middleware/authorization");
const router = express.Router();

router.post("/signout",  authMiddleware.verifyToken, authController.signOut);

module.exports = router;
