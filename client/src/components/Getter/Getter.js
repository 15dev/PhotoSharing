import React from 'react';


import './Getter.css'


function Getter(){

    const [idShared, setIdShared] = React.useState('');
    const [pictureDownloaded, setPictureDownloaded] = React.useState([]);

    function handleChange(e){
        setIdShared(e.target.value);
    }


    function getPictures(){

        let data = '{"idShared": "'+idShared+'"}';

        console.log(data);

        fetch('api/pictures/download',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(data => setPictureDownloaded(data));;


    }





    function DisplayGetter() {

        if(pictureDownloaded.length){
            return (
                <div className="DownloadedImages">
                    {
                        pictureDownloaded.map((picture,i) => {

                            const pictureBase64 = JSON.parse(picture.picture).base64
                            const Example = ({ data }) => <img  src={`${data}`} />

                            return(
                                <Example key={i} data={pictureBase64}/>
                            )
                        })

                    }

                </div>
            )
        }
        return(
            <div></div>
        )

    }



    return (
        <div className="Getter">
            <h1>Get</h1>
            <div className="Get">
                <p>Enter the shared Id : </p>
                <input name="IdShared" onChange={handleChange}></input>
                <button type="button" disabled={idShared.length<10} onClick={getPictures}>Get pictures !</button>
            </div>
            <DisplayGetter/>
        </div>
    );
    
}

export default Getter;
