import React from 'react'
import {connect} from 'react-redux'

import {setGalleryImages} from '../../redux/gallery-images/gallery-image.actions'
import {getGalleryImages} from '../../firebase/firebase.utils'

import './gallery-upload.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {addToGallery} from '../../firebase/firebase.utils'

class GalleryUpload extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description : '',
            imageUrl: '',
            thumbnail: ''
        }
    }

    handleChange = event => {
        const {value, name } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await addToGallery(this.state.title, this.state.description, this.state.imageUrl, this.state.thumbnail)
        let galleryImages = await getGalleryImages()

        this.props.setGalleryImages(galleryImages)

        this.setState({
            title: '',
            description : '',
            imageUrl: '',
            thumbnail: ''
        })
    }

    render() {
        return (
            <div className='gallery-upload'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="title" type="text" value={this.state.title} label="Title*" handleChange={this.handleChange} required />
                    <FormInput name="description" type="text" value={this.state.description} label="Description" handleChange={this.handleChange} />
                    <FormInput name="imageUrl" type="text" value={this.state.imageUrl} label="Image URL*" handleChange={this.handleChange} required />
                    <FormInput name="thumbnail" type="text" value={this.state.thumbnail} label="Thumbnail" handleChange={this.handleChange} />

                    <div className="button">
                        <CustomButton type='submit'>Upload </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const dispatchStateToProps = dispatch => ({
    setGalleryImages: gallery => dispatch(setGalleryImages(gallery))
})

export default connect(null, dispatchStateToProps)(GalleryUpload)