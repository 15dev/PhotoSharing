// endpoint pour voir la page

// pour upload l'image

// pour voir l'image

const express = require('express');
const RateLimit = require('express-rate-limit');

const app = express();
const port = 5000;

const picturesRouter = require('./routes/picturesRoutes');


const limiter = RateLimit({
    windowMs: 15*60*1000,
    max:100
})


app.use('/api/pictures',picturesRouter);

app.use('*', function(req,res) {
    res.send("hello");
})


app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
})