import React from 'react'
import {connect} from 'react-redux'

import {getGalleryImages, removeFromGallery} from '../../firebase/firebase.utils'

import {setGalleryImages} from '../../redux/gallery-images/gallery-image.actions'

import CustomButton from '../custom-button/custom-button.component'
import ImagePreview from '../image-preview/image-preview.component'

import './gallery-delete.styles.scss'


class GalleryDelete extends React.Component{
    galleryImages = this.props.galleryImages

    removeItem = async (item) => {
        await removeFromGallery(item)
        this.galleryImages = await getGalleryImages();
        this.props.setGalleryImages(this.galleryImages)
        this.forceUpdate()
    }


    async componentDidMount(){
        this.galleryImages = this.props.galleryImages
        if(!this.galleryImages.length){
            this.galleryImages = await getGalleryImages();
            this.props.setGalleryImages(this.galleryImages)
        }

        this.forceUpdate()
        
    }

    render(){
        return(
            <div className="gallery-delete">
                <div className="items">
                    {
                        this.galleryImages.map((item, idx) => {
                            return(
                                <div className='item' key={idx} >
                                    <ImagePreview description={item.description} imageUrl={item.imageUrl} thumbnail={item.thumbnail} title={item.title} />
                                    <CustomButton onClick={() => this.removeItem(item.id)}> Delete </CustomButton>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    galleryImages: state.gallery.galleryImages
})

const dispatchStateToProps = dispatch => ({
    setGalleryImages: gallery => dispatch(setGalleryImages(gallery))
})

export default connect(mapStateToProps, dispatchStateToProps)(GalleryDelete)