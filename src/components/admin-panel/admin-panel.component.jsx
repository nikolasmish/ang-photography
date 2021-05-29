import React from 'react'

import './admin-panel.styles.scss'


import GalleryUpload from '../gallery-upload/gallery-upload.component'
import GalleryDelete from '../gallery-delete/gallery-delete.component'

import {getGalleryImages} from '../../firebase/firebase.utils'


let galleryImages = []

class AdminPanel extends React.Component {
  
    async componentDidMount(){
      if(galleryImages.length)
        return
      galleryImages = await getGalleryImages()
      this.setState({})
    }

    render(){
        return(
        <div className="admin-panel">
            <GalleryUpload/>
            <GalleryDelete />
        </div>
        )
    }
}


export default AdminPanel
