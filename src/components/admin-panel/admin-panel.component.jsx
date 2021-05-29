import React from 'react'

import './admin-panel.styles.scss'

import ImagePreview from '../image-preview/image-preview.component'
import GalleryUpload from '../gallery-upload/gallery-upload.component'

import {firestore} from '../../firebase/firebase.utils'


let galleryImages = []

class AdminPanel extends React.Component {

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
        <div className="admin-panel">
            <GalleryUpload data={galleryImages}/>
        </div>
        )
    }
  
    
}

export default AdminPanel
