import React from 'react'
import {connect} from 'react-redux'
import {editBlogPost} from '../../firebase/firebase.utils'
import {getSpecificBlogPost, deleteBlogPost} from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './blog-edit.styles.scss'


let blogData = []
class BlogEdit extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title:'',
            description:'',
            thumbnail:'',
            blogContent:''
        }
    }

    async componentDidMount(){
        blogData = await getSpecificBlogPost(parseInt(this.props.match.params.blogId))

        this.setState({
            title: blogData.title,
            description: blogData.description,
            thumbnail: blogData.thumbnail,
            blogContent: blogData.blogContent
        })

        this.forceUpdate()
    }

    handleSubmit=async(event)=>{   
        event.preventDefault();
        await editBlogPost(this.state.title, this.state.description, this.state.thumbnail, this.state.blogContent, blogData.blogId)

        this.setState({
            title:'',
            description:'',
            thumbnail:'',
            blogContent:''
      })
    }

    handleDelete = () => {
        deleteBlogPost(blogData.blogId)
    }

    handleChange = event => {
        const {value, name } = event.target
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="blog-edit">

                {blogData && this.props.currentUser ? 
                (
                    <div className="edit">
                        <form onSubmit={this.handleSubmit}>
                            <FormInput name="title" type="text" value={this.state.title} label="Title*" handleChange={this.handleChange} required />
                            <FormInput name="description" type="text" value={this.state.description} label="Description*" handleChange={this.handleChange}  />
                            <FormInput name="thumbnail" type="text" value={this.state.thumbnail} label="Thumbnail*" handleChange={this.handleChange}  />
                            <FormInput textArea style={{height: '400px'}} name="blogContent" type="text" value={this.state.blogContent} label="Blog Content*" handleChange={this.handleChange} required />

                            <div className="button">
                                <CustomButton type="submit" value='Submit Form'>Edit</CustomButton>
                                <CustomButton style={{marginTop:'10px', color:'red'}} onClick={this.handleDelete}>DELETE POST</CustomButton>
                            </div>
                        </form>

                    </div>
                
                )
                :
                null
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(BlogEdit)