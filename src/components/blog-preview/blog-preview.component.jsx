import React from 'react'
import {Link} from 'react-router-dom'

import CustomButtom from '../custom-button/custom-button.component'

import './blog-preview.styles.scss'

const BlogPreview = (props) => (
    <div className="blog-preview">
        <img className='image' src={props.thumbnail} alt='blog preview' />
        <h2 className='title'>{props.title}</h2>
        <p className='description'>{props.description}</p>
        <Link to={`blogs/${props.id}`} >
            <CustomButtom>Pročitaj više</CustomButtom>
        </Link>
    </div>
)

export default BlogPreview