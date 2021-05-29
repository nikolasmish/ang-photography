import React from 'react'
import {Link} from 'react-router-dom'

import './homepage.styles.scss'

import ImagesContainer from '../../components/images-container/images-container.component'
import CustomButton from '../../components/custom-button/custom-button.component'


const Homepage = () => (
    <div className='homepage'>
        <div className="new-content">
            <h2 className='header-title'>Najnovije objave</h2>
            <ImagesContainer data='gallery-images' itemCount={4} />
            <Link to='/gallery' className='button'>
                <CustomButton>Pogledaj više</CustomButton>
            </Link>
        </div>

    </div>
)

export default Homepage