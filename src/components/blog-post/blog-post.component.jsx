import React from 'react'
import {getSpecificBlogPost} from '../../firebase/firebase.utils'


import './blog-post.styles.scss'

class BlogPost extends React.Component {
    blogData = []

    async componentDidMount(){
        console.log('MOUNTED')
        this.blogData = await getSpecificBlogPost(parseInt(this.props.match.params.blogId))
        document.getElementById("blog-content").innerHTML = this.blogData.blogContent
        this.forceUpdate()
    }

    render(){
        return(
            <div className="blog-post">
                <div className="blog-content" id="blog-content">
                    
                </div>

            </div>
        )
    }
    
}

export default BlogPost