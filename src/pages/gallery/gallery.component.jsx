import React from 'react'

import './gallery.styles.scss'

import ImagesContainer from '../../components/images-container/images-container.component'


const GalleryPage = () => (
    <div className='gallery-page'>
        <h2 className="gallery-title">Galerija</h2>
        <ImagesContainer data='gallery-images' />
    </div>
)

export default GalleryPage