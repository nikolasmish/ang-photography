import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import CustomButtom from '../custom-button/custom-button.component'

import './blog-preview.styles.scss'

const BlogPreview = (props) => (
    <div className="blog-preview">
        {
        props.thumbnail ?
        <img className='image' src={props.thumbnail} alt='blog preview' />
        : null
        }
        <h2 className='title'>{props.title}</h2>
        <p className='description'>{props.description}</p>
        <Link to={`blogs/${props.id}`} >
            <CustomButtom>Pročitaj više</CustomButtom>
        </Link>
        {
            props.currentUser ?
            (<Link to={`blogs/${props.id}/edit`}  >
                <CustomButtom style={{marginTop:'10px'}}>EDIT</CustomButtom>
            </Link>
            )
            :
            null
        }
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(BlogPreview)