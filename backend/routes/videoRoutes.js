const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/:filename', videoController.streamVideo);

module.exports = router;
