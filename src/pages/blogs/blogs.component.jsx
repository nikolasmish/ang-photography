import React from 'react'

import BlogsContainer from '../../components/blogs-container/blogs-container.component'

import './blogs.styles.scss'

const BlogsPage = () => (
    <div className="blogs-page">
        <h2 className='blogs-title'>Blog</h2>
        <BlogsContainer />
    </div>
)

export default BlogsPage