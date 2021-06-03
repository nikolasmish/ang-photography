import React from 'react'
import {getBlogPosts} from '../../firebase/firebase.utils'

import BlogPreview from '../blog-preview/blog-preview.component'

import './blogs-container.styles.scss'


class BlogsContainer extends React.Component{
blogPosts = []
  
    async componentDidMount(){
       this.blogPosts = await getBlogPosts()
    //    console.log(blogPosts)
        //this.props.setGalleryImages(this.galleryImages)
  
      this.forceUpdate()
    }

    render(){
        return(
            <div className="blog-container">
              <ul className={this.blogPosts ? 'show' : 'hide'}>
              {
                this.blogPosts.length ?
                this.blogPosts.slice(0, this.props.itemCount).map(
                  (blog, idx) => (
                  <li key={idx}>
                    <BlogPreview id={blog.blogId} title={blog.title} description={blog.description} thumbnail={blog.thumbnail} />
                  </li>)
                  )
                  :
                  <h2>Oh-oh, nothing to see here!</h2>
              } 
              </ul>
            </div>
        )
    }
}

export default BlogsContainer