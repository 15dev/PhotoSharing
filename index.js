// endpoint pour voir la page

// pour upload l'image

// pour voir l'image

const express = require('express');


require('dotenv').config({path: __dirname + '/.env'})

const app = express();
const port = 5000;

//const bodyParser = require('body-parser');

app.use(express.json());


const picturesRouter = require('./routes/picturesRoutes');





app.use('/api/pictures', picturesRouter);


app.use('*', function(req,res) {
    res.status(404).send();
})


app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
})