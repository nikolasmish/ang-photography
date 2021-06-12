import React from 'react'
import {addBlogPost} from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import BlogPostPreview from '../blog-post-preview/blog-post-preview.component'

import './blog-upload.styles.scss'

class BlogUpload extends React.Component{
        constructor(props){
        super(props)

        this.state = {
            title:'',
            description:'',
            thumbnail:'',
            blogContent:''
        }
    }

    handleSubmit=async(event)=>{   
      event.preventDefault();
      addBlogPost(this.state.title, this.state.description, this.state.thumbnail, this.state.blogContent)


      this.setState({
          title:'',
          description:'',
          thumbnail:'',
          blogContent:''
      })
    }

    handleChange = event => {
        const {value, name } = event.target
        this.setState({ [name]: value }, () => document.getElementById("blog-content").innerHTML = this.state.blogContent)
    }

    render(){
        return(
            <div className="blog-upload">
                <BlogPostPreview blogContent={this.state.blogContent} />
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="title" type="text" value={this.state.title} label="Title*" handleChange={this.handleChange} required />
                    <FormInput name="description" type="text" value={this.state.description} label="Description*" handleChange={this.handleChange}  />
                    <FormInput name="thumbnail" type="text" value={this.state.thumbnail} label="Thumbnail*" handleChange={this.handleChange}  />
                    <FormInput textArea style={{height: '400px'}} name="blogContent" type="text" value={this.state.blogContent} label="Blog Content*" handleChange={this.handleChange} required />

                    <div className="button">
                        <CustomButton type="submit" value='Submit Form'>Upload</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default BlogUpload