import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import BlogsContainer from '../../components/blogs-container/blogs-container.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import './blogs.styles.scss'

const BlogsPage = ({currentUser}) => (
    <div className="blogs-page">
        <h2 className='blogs-title'>Blog</h2>
        <BlogsContainer />
        {
            currentUser ? 
            <Link to='blogs/upload'>
                <CustomButton>Upload New Blog</CustomButton>
            </Link> : null
        }
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(BlogsPage)