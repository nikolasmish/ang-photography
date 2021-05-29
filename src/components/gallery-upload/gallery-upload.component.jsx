import React from 'react'

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

    handleSubmit = (event) => {
        event.preventDefault();

        addToGallery(this.state.title, this.state.description, this.state.imageUrl, this.state.thumbnail)

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

export default GalleryUpload