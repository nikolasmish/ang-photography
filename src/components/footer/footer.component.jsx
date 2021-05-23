import React from 'react'

import './footer.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className='footer'>
        <div className="icons">
        
            <a href="https://www.facebook.com/ONA-ITTY-102068988686196" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
            <a href="https://www.instagram.com/onaitty/" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
        </div>
    </div>
)

export default Footer