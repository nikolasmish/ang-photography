import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './navigation.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

const Navigation = () => (
    <div className='navigation'>
            <Link to='/' style={{textDecoration:"none"}} >
                <h2 style={{margin:'0px', color:'black'}}>ONA ITTY • Angie</h2>
            </Link>
        <div className='links'>
            <Link to='/gallery'>
                <span className='link'>GALERIJA</span>
            </Link>
            <Link to='/about'>
                <span className='link'>O MENI</span>
            </Link>
            <Link to='/pricing'>
                <span className='link'>CENOVNIK</span>
            </Link>
            <Link to='/faq'>
                <span className='link'>FAQ</span>
            </Link>
            <Link to='/contact'>
                <span className='link'>KONTAKT</span>
            </Link>
        </div>
        <div>
            <Link className='button' to='/arrange'>
                <CustomButton >ZAKAZI</CustomButton>
            </Link>
        </div>
        <div className='mobile'>
                <FontAwesomeIcon icon={faBars} size={'lg'} style={{color:'black'}} />
            </div>
    </div>
)

export default Navigation;