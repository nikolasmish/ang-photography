import React from 'react'

import { connect } from 'react-redux'
import { setGalleryImages } from '../../redux/gallery-images/gallery-image.actions'

import ImagePreview from '../image-preview/image-preview.component'
import {firestore, getGalleryImages} from '../../firebase/firebase.utils'

import './images-container.styles.scss'

let galleryImages = []

class ImagesContainer extends React.Component{
  constructor({itemCount}){
    super({itemCount})


  }

  async componentDidMount(){
    if(galleryImages.length)
      return
    galleryImages = await getGalleryImages()
    console.log(galleryImages)

    this.props.setGalleryImages(galleryImages)
    
    this.setState({})
  }

    render(){
      return(
          <div className='images-container'>
              <ul className={galleryImages ? 'show' : 'hide'}>
              {
                galleryImages.length ?
                galleryImages.slice(0, this.props.itemCount).map(
                  (image, idx) => (
                  <li key={idx}>
                    <ImagePreview id={idx} description={image.description} imageUrl={image.imageUrl} thumbnail={image.thumbnail} title={image.title} imagesData={galleryImages} preview />
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