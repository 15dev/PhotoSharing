import React from 'react';
import ImageUploader from 'react-images-upload';

import './Uploader.css'






function Uploader(){

    const [pictureArray, setPictureArray]= React.useState([]);


    const [message, setMessage] = React.useState('No message.');

    const [idToShare, setIdToShare] = React.useState('');


    const onDrop = (picture) => {
        setPictureArray(picture);
    };

    function handleChange(e){
        setMessage(e.target.value);
        console.log(e.target.value);
    }

    function getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error : ', error);
        }
    }


    function sendPictures(){

       
        //
        //let n = jsonData.lastIndexOf('}');

       // let jsonData = '{}';

        let data = '{"message": "'+message+'","pictures":[]}';

        const obj = JSON.parse(data);

        var ctr=0;
        pictureArray.forEach(element => {            
            
            getBase64(element, (result) => {
                ctr++;

                obj["pictures"].push({base64:result});
                //jsonData = jsonData.substring(0,n)+'"message":'+result+jsonData.substring(n);
                console.log(result);
                if(ctr === pictureArray.length){

                    obj["id"]=URL.createObjectURL(pictureArray[0]).split("/")[3];

                    fetch('api/pictures/upload',{
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(obj)
                    })
                    .then(response => response.json())
                    .then(data => setIdToShare(data.idToShare));
                
                }
            })

        });    


    }

    function Display() {

        if(idToShare !== ''){
            return (
                <div>Id to get pictures : {idToShare}</div>
            )
        }
        
        return (

            <div className="UploadContent">
                {
                    pictureArray.length > 0 && <div className="Message"><p>Message :</p><textarea onChange={handleChange} /></div>
                }
                <button type="button" disabled={!pictureArray.length} onClick={sendPictures}>Upload</button>
            </div>
        )

    }
    


    return (
        <div className="Uploader">

            <h1>Upload</h1>

            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={36700}
                withPreview={true}
                withLabel={true}
            />
        
            <Display/>



        </div>
    );
    
}

export default Uploader;
