import React from 'react'

import './mobile-navigation.styles.scss'

import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faImages, faQuestion, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const MobileNavigation = () => (
    <div className='mobile-navigation'>
        <div className="links">
            <Link to='/'>
                <div className="link">
                    <FontAwesomeIcon icon={faHome} size='lg' />
                    <h3>Početna</h3>
                </div>
            </Link>
            <Link to='/gallery'>
                <div className="link">
                    <FontAwesomeIcon icon={faImages} size='lg' />
                    <h3>Galerija</h3>
                </div>
            </Link>
            <Link to='/faq'>
                <div className="link">
                    <FontAwesomeIcon icon={faQuestion} size='lg' />
                    <h3>FAQ</h3>
                </div>
            </Link>
            <Link to='/contact'>
                <div className="link">
                    <FontAwesomeIcon icon={faEnvelope} size='lg' />
                    <h3>Kontakt</h3>
                </div>
            </Link>
        </div>

    </div>
)

export default MobileNavigation