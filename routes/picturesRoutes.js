const express = require('express');
var router = express.Router();
var pictures = require('../controllers/picturesController');

router.post('/upload',pictures.uploadPictures);

router.post('/download',pictures.downloadPictures);

module.exports = router;