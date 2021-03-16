import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class Uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {pictures: []};
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture)
        })
    }


    render() {
        return (
        <div className="Uploader">
            <ImageUploader
                withIcon={true}
                buttonText='CHoose images'
                onCHange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
            />
        </div>
        );
    }


}

export default Uploader;
