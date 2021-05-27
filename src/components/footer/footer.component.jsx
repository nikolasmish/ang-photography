import React from 'react'

import './footer.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'

const Footer = () => (
    <div className='footer'>
        <div className="icons">
        
        <span className='heart'><FontAwesomeIcon icon={faHeart} size='2x' /></span>
        <span className='heart'><FontAwesomeIcon icon={faHeart} size='2x' /></span>
        <span className='heart'><FontAwesomeIcon icon={faHeart} size='2x' /></span>
        </div>
    </div>
)

export default Footer