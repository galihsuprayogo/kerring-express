const express = require("express");

const router = express.Router();
const authController = require("../controllers/authorization");

router.post("/signout", authController.signOut);

module.exports = router;
