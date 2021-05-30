import React from 'react'

import { connect } from 'react-redux'
import { setGalleryImages } from '../../redux/gallery-images/gallery-image.actions'

import ImagePreview from '../image-preview/image-preview.component'
import {getGalleryImages} from '../../firebase/firebase.utils'

import './images-container.styles.scss'


class ImagesContainer extends React.Component{
  galleryImages = this.props.galleryImages
  
  async componentDidMount(){
    if(!this.galleryImages.length){
      this.galleryImages = await getGalleryImages()
      this.props.setGalleryImages(this.galleryImages)
    }

    this.forceUpdate()
  }

    render(){
      return(
          <div className='images-container'>
              <ul className={this.galleryImages ? 'show' : 'hide'}>
              {
                this.galleryImages.length ?
                this.galleryImages.slice(0, this.props.itemCount).map(
                  (image, idx) => (
                  <li key={idx}>
                    <ImagePreview id={idx} description={image.description} imageUrl={image.imageUrl} thumbnail={image.thumbnail} title={image.title} imagesData={this.galleryImages.slice(0, this.props.itemCount)} preview />
                  </li>)
                  )
                  :
                  <h2>Oh-oh, nothing to see here!</h2>
              } 
              </ul>
          </div>
      )
    }
}

const mapDispatchToProps = dispatch => ({
  setGalleryImages: gallery => dispatch(setGalleryImages(gallery))
})

const mapStateToProps = (state) => ({
  galleryImages: state.gallery.galleryImages
})

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer)