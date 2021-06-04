import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import {getSpecificBlogPost} from '../../firebase/firebase.utils'

import CustomButtom from '../custom-button/custom-button.component'
import BlogEdit from '../blog-edit/blog-edit.component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'


import './blog-post.styles.scss'

class BlogPost extends React.Component {
    blogData = []

    async componentDidMount(){
        this.blogData = await getSpecificBlogPost(parseInt(this.props.match.params.blogId))
        document.getElementById("blog-content").innerHTML = this.blogData.blogContent
    }

    render(){
        return(
            <div className="blog-post">
                <div className="blog-content" id="blog-content">
                    
                </div>
                <div className="blog-about">
                    <h2 className="written-by">WRITTEN BY</h2>
                    <div className="about-author">
                        <img src="https://i.imgur.com/jJfCSjD.png" alt="" />
                        <div>
                            <h2 className='author-title'>Angie Simic</h2>
                            <p className='author-description'>Philosophy student, writer, photographer, dog owner. A passion for language and the unexplored universe. I aim to marry poetry and nature. </p>
                            <div className="author-socials">
                                <a className='link' href="https://www.facebook.com/ONA-ITTY-102068988686196" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                                <a className='link' href="https://www.instagram.com/onaitty/" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.props.currentUser ?
                        <BlogEdit blogId={parseInt(this.props.match.params.blogId)} />
                    : null
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(BlogPost)