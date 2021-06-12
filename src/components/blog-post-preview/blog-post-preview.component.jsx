import React,{useEffect} from 'react'

import './blog-post-preview.styles.scss'

const BlogPostPreview = ({blogContent}) => {
  useEffect(() => {
    document.getElementById("blog-content").innerHTML = blogContent
  })
  return (
    <div className="blog-post-preview">
      <div className='blog-content' id='blog-content'>
      </div>
    </div>
  )
}

export default BlogPostPreview
