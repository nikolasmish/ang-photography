import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {IMAGES_DATA} from '../../ImagesData'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = IMAGES_DATA.map(item => {
    return item.imageUrl
})

export default class LightboxPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: props.idx,
      isOpen: props.isOpen,
    };
  }

  componentDidMount(){
    document.body.style.overflowY = "hidden"
  }
  
  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => {
              this.setState({ isOpen: false })
              document.body.style.overflowY = "scroll"
            }}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            enableZoom={false}
          />
          
        )
        }
      </div>
    );
  }
}