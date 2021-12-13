const express = require("express");

const router = express.Router();
const usersController = require('../controllers/users');

router.post('/create', usersController.createUser);
router.get('/all', usersController.getUser);

module.exports = router;