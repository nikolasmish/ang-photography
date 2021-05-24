import React from 'react'

import './image-preview.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import LightboxPreview from '../lightbox-preview/lightbox-preview.component'
import { render } from '@testing-library/react'


const openPreview = (id) => {
    render(
        <LightboxPreview idx={id-1} isOpen={true} />
    )

    
}

const ImagePreview = (props) => (
    <div className='image-preview'>
        <div className="image-container">
            <div className='image' style={{backgroundImage:`url(${props.imageUrl})`}} />
            <div className='image-hover'>
                {/* <h3 className='title'>{props.title}</h3> */}
                <div className='button'>
                    <div onClick={() => openPreview(props.id)}>
                        <CustomButton>Preview</CustomButton>
                    </div>
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
                <p>PHOTOGRAPHY BY ANGIE SIMIC</p>
            </div>
            
            
            
        </div>
        
    </div>
)

export default ImagePreview