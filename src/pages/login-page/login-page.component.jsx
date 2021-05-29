import React from 'react'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {LoginWithEmail} from '../../firebase/firebase.utils'

import './login-page.styles.scss'

class LoginPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            user: 'Null'
        }
    }

    handleChange = event => {
        const {value, name } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = () => LoginWithEmail(this.state.email, this.state.password)
        

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

export default LoginPage