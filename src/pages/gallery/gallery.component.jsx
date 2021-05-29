import React from 'react'

import './gallery.styles.scss'

import ImagesContainer from '../../components/images-container/images-container.component'


const GalleryPage = () => (
    <div className='gallery-page'>
        <ImagesContainer data='gallery-images' />
    </div>
)

export default GalleryPage