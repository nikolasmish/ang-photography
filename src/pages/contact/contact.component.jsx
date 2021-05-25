import React from 'react'

import './contact.styles.scss'

import Card from '../../components/card/card.component'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {sendMail} from '../../mailgun/mailgun.config'

class ContactPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email:'',
            message: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        sendMail(this.state.name, this.state.email, this.state.message)

        this.setState({
            name: '',
            email:'',
            message: ''
    })
    }

    handleChange = event => {
        const {value, name } = event.target

        this.setState({ [name]: value })
    }

    render(){
        return(
        <div className='contact'>
            <Card noPadding flexRow className='card'>
                <div className='left-image' />

                <div className='right-side'>
                    <h2>Kontakt</h2>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="name" type="text" value={this.state.name} label="Ime" handleChange={this.handleChange} required />
                        <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />
                        <FormInput name="message" textArea type="text" value={this.state.message} label="Poruka" handleChange={this.handleChange} style={{height: '100px'}} required />

                        <CustomButton type="submit" value='Submit Form'>Pošalji</CustomButton>
                    </form>
                </div>
            </Card>
        </div>
        )}
        
}

export default ContactPage