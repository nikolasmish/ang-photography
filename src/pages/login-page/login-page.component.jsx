import React from 'react'

import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.actions'


import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {auth} from '../../firebase/firebase.utils'


import './login-page.styles.scss'

class LoginPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = event => {
        const {value, name } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            this.props.setCurrentUser({
                currentUser: userCredential
            })
            console.log(userCredential)
        })
        .catch((error) => {
            //var errorCode = error.code;
            var errorMessage = error.message;
    
            console.log('Error: ' + errorMessage)
        });

    }
        

    render(){
        return(
            <div className="login-page">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="email" type="email" value={this.state.email} label="Email*" handleChange={this.handleChange} required />
                        <FormInput name='password' label='Password' type='password' value={this.state.password} handleChange={this.handleChange} required />

                        <CustomButton type='submit'> Login </CustomButton>
                    </form>
                </div>
            </div>
        )
    } 
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(null, mapDispatchToProps)(LoginPage)