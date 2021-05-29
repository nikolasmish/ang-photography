import React from 'react'

import './images-container.styles.scss'

import ImagePreview from '../image-preview/image-preview.component'
import {firestore} from '../../firebase/firebase.utils'

let galleryImages = []


class ImagesContainer extends React.Component{
    fetchImages=async()=>{
      let temp = []
      const peopleRef=firestore.collection('gallery-images');
    
      const data=await peopleRef.get();
      data.docs.forEach((item, idx)=>{
        temp.push(item.data())
        
      })
      galleryImages = temp
      
      this.setState({})
    }

  
  componentDidMount(){
    if(galleryImages.length)
      return
    this.fetchImages()
  }


    render(){
      return(
          <div className='images'>
              <ul className={galleryImages.length ? 'show' : 'hide'}>
              {
                galleryImages.length ?
                galleryImages.map(
                  (image, idx) => (
                  <li key={idx}>
                    <ImagePreview id={idx} description={image.description} imageUrl={image.imageUrl} thumbnail={image.thumbnail} title={image.title} imagesData={galleryImages} />
                  </li>)
                  )
                  :
                  null
              } 
              </ul>
          </div>
      )
    }
            
}

export default ImagesContainer