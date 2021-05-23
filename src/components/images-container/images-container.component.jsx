import React from 'react'
import {IMAGES_DATA} from '../../ImagesData'

import './images-container.styles.scss'

import ImagePreview from '../image-preview/image-preview.component'


const ImagesContainer = () => (
        <div className='images'>
            <ul>
            {
            IMAGES_DATA.map(
                (image) => (
                <li key={image.id}><ImagePreview id={image.id} imageUrl={image.imageUrl} title={image.title}/></li>)
                )
            }
            </ul>
        </div>
)

export default ImagesContainer