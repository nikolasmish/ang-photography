import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

let imagesUrls = []

export default class LightboxPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: props.idx,
      isOpen: props.isOpen,
      images: props.imagesData
    };

      imagesUrls = this.state.images.map(item => {

      return item.imageUrl
    })
  }

  
  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={imagesUrls[photoIndex]}
            nextSrc={imagesUrls[(photoIndex + 1) % imagesUrls.length]}
            prevSrc={imagesUrls[(photoIndex + imagesUrls.length - 1) % imagesUrls.length]}
            onCloseRequest={() => {
              this.setState({ isOpen: false })
              document.body.style.overflowY = "scroll"
            }}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + imagesUrls.length - 1) % imagesUrls.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imagesUrls.length,
              })
            }
            enableZoom={true}
          />
          
        )
        }
      </div>
    );
  }
}