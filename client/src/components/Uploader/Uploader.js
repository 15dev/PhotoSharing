import React from 'react';
import ImageUploader from 'react-images-upload';

function Uploader(){

    const [pictureArray, setPictureArray]= React.useState([]);

    const onDrop = (picture) => {
        //console.log(picture);

        setPictureArray(pictureArray.concat(picture));
   
    };


    const sendPictures = (pictures) => {
        console.log(pictures);
    };


 
    return (
        <div className="Uploader">
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
            />

            <div className="test">
                
                {
                    pictureArray.length > 0 ? <p>Files to upload :</p> : ''
                }

               {
                 
                       
                   
                   

                   pictureArray && pictureArray.length > 0 && pictureArray.map((picture) => {
                        return (
                            
                            <div key={picture} className="picture">
                                <p >{picture.name}</p>
                                <img src={URL.createObjectURL(picture)} alt={picture.name}/>
                            </div>
                        )
                   })
                }
            </div>
            <button type="button" disabled={!pictureArray.length} onClick={sendPictures({pictureArray})}>Upload</button>
        </div>
    );
    
}

export default Uploader;
