import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

import './navigation.styles.scss'
import CustomButton from '../custom-button/custom-button.component'


const Navigation = ({currentUser}) => (
    <div className='navigation'>
        <div className="box">
            <Link to='/' style={{textDecoration:"none"}} className='logo' >
                <h2 style={{margin:'0px', color:'black'}}>ONA ITTY</h2>
            </Link>
        </div>
        <div className='links box'>
            <div>
                <Link to='/gallery'>
                    <span className='link'>GALERIJA</span>
                </Link>
                <Link to='/about'>
                    <span className='link'>O MENI</span>
                </Link>
                <Link to='/faq'>
                    <span className='link'>FAQ</span>
                </Link>
                <Link to='/contact'>
                    <span className='link'>KONTAKT</span>
                </Link>
            </div>
        </div>
        <div className='box'>
            <div className='right-side'>
                <a className='link' href="https://www.facebook.com/ONA-ITTY-102068988686196" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                <a className='link' href="https://www.instagram.com/onaitty/" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                <Link className='button' to='/arrange'>
                    <CustomButton>ZAKAŽI</CustomButton>
                </Link>
                {
                    currentUser ?
                    (
                    <Link className='button' to='/admin'>
                        <CustomButton>EDIT POSTS</CustomButton>
                    </Link>
                    )
                    :
                    null
                }
                
            </div>
        </div>
        <div className='mobile'>
                <FontAwesomeIcon icon={faBars} size={'lg'} style={{color:'black'}} />
            </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect()(Navigation);