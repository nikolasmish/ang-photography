import React from 'react'
import {connect} from 'react-redux'

import {removeFromGallery} from '../../firebase/firebase.utils'

import CustomButton from '../custom-button/custom-button.component'
import ImagePreview from '../image-preview/image-preview.component'

import './gallery-delete.styles.scss'

const GalleryDelete = ({galleryImages}) => {
    function removeItem(item){
        removeFromGallery(item)
    }

    return(
        <div className="gallery-delete">
            <div className="items">
                {
                    galleryImages.map((item, idx) => {
                        return(
                            <div className='item' key={idx} >
                                <ImagePreview description={item.description} imageUrl={item.imageUrl} thumbnail={item.thumbnail} title={item.title} />
                                <CustomButton onClick={() => removeItem(item.id)}> Delete </CustomButton>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    galleryImages: state.gallery.galleryImages
})

export default connect(mapStateToProps)(GalleryDelete)