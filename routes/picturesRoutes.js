const express = require('express');
var router = express.Router();
var pictures = require('../controllers/picturesController');

router.get('/upload',pictures.uploadPictures);

module.exports = router;