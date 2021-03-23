// endpoint pour voir la page

// pour upload l'image

// pour voir l'image

const express = require('express');
const RateLimit = require('express-rate-limit');

const app = express();
const port = 5000;

//const bodyParser = require('body-parser');

app.use(express.json());


const picturesRouter = require('./routes/picturesRoutes');


const limiter = new RateLimit({
    windowMs: 15*60*1000,
    max:5
});


app.use('/api/pictures',limiter, picturesRouter);


app.use('*', function(req,res) {
    res.status(404).send();
})


app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
})