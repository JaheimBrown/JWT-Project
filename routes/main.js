const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth');
const {dashBoard, login} = require('../controllers/main');

router.route('/dashboard').get(authMiddleware, dashBoard);
router.route('/login').post(login);

module.exports = router;