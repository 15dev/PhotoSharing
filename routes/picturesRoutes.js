const express = require('express');
var router = express.Router();
var pictures = require('../controllers/picturesController');

const RateLimit = require('express-rate-limit');

const uploadLimiter = new RateLimit({
    windowMs: 1*60*1000,
    max:1
});

const downloadLimiter = new RateLimit({
    windowMs: 5*1000,
    max:1
});

router.post('/upload',uploadLimiter,pictures.uploadPictures);

router.post('/download',downloadLimiter, pictures.downloadPictures);

module.exports = router;