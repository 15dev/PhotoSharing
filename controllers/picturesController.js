require('dotenv').config({path: __dirname + '/.env'})
var pool = require('../config/database');

exports.uploadPictures = function(req,res,next) {

    const id = req.body.id;
    const message = req.body.message;
    const pictures = req.body.pictures;
   //console.log(req.body)


    const uploadPicturesEnv = {
        name:'upload picture environnement',
        text:'INSERT INTO uploads (upload_id,message) VALUES($1,$2);',
        values:[id,message]
    }

    pool.query(uploadPicturesEnv)
    .then((result) => { 
        //console.log(result);

        pictures.forEach(element => {
            //console.log(element.base64);
            pool.query({
                name:'upload pictures',
                text:'INSERT INTO pictures (upload_id,picture) VALUES($1,$2);',
                values:[id,element]
            })
            .then((result2) => { 
                res.status(200).json({idToShare: id});
                //console.log(result2);
            })
            .catch((error) => {
                console.log(error);
            });
        });

        /*
        */


    })
    .catch((error) => {
        console.log(error);
    })

}


// INJECTION CORRIGEE
exports.downloadPictures = function(req,res,next) {
    const id = req.body.idShared;
    console.log(id);

    const downloadPictures = {
        name:'download pictures',
        text:'SELECT pictures.picture FROM pictures INNER JOIN uploads ON pictures.upload_id=uploads.upload_id WHERE uploads.upload_id=$1;',
        values:[id]
    }
    pool.query(downloadPictures)
    .then((result) => { 

        res.status(200).send(result.rows);
    });

}


// INJECTION PROBLEM
/*
exports.downloadPictures = function(req,res,next) {
    const id = req.body.idShared;
    //console.log(id);
    
    const sql =  "SELECT pictures.picture FROM pictures INNER JOIN uploads ON pictures.upload_id=uploads.upload_id WHERE uploads.upload_id='"+id+"';"
  
    var statements = sql.split(';'); 
    var ctr = 0;

    function next () {

        var statement = statements.shift();

        if(statement) {
            //console.log(statement);
            const downloadPictures = {
                name:'download pictures'+ctr,
                text:statement
            } 

            pool.query(downloadPictures)
            .then((result) => { 
        
                if(result.rowCount > 0){
                    res.status(200).send(result.rows);
                } else {
                    res.status(404).send('No picture found with id '+id);
                }
                console.log(result);
                
                next();
            })
            .catch((error) => {
                res.status(504);
                console.log(error);
            });
        }

        ctr++;

    };
    next();
}
*/





