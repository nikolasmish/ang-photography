import React from 'react'

import './image-preview.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import LightboxPreview from '../lightbox-preview/lightbox-preview.component'
import { render } from '@testing-library/react'


const openPreview = (id, imagesData) => {
    render(
        <LightboxPreview idx={id} isOpen={true} imagesData={imagesData} />
    )
}

const ImagePreview = (props) => (
    <div className='image-preview'>
        <div className="image-container">
            <div className='image' style={{backgroundImage:`url(${props.thumbnail ? props.thumbnail : props.imageUrl})`}} />
            <div className='image-hover'>
                {/* <h3 className='title'>{props.title}</h3> */}
                <div className='button'>
                    {
                    props.preview ?
                    <div onClick={() => openPreview(props.id, props.imagesData)}>
                        <CustomButton>Preview</CustomButton>
                    </div>
                    :
                    null
                    }
                </div>
            </div>
        </div>


        <div className='image-about'>
            <h2 className='title'>{props.title}</h2>
            {
                props.description ?
                    (<div className="description">
                    <p>{props.description}</p>
                    
                    </div>)
                    :
                    null

            }
            <div className='about'>
                <p>BY ANGIE SIMIC</p>
                <p>PHOTOGRAPHY BY ONA ITTY</p>
            </div>
            
            
            
        </div>
        
    </div>
)

export default ImagePreview