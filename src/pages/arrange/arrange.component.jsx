import React from 'react'

import './arrange.styles.scss'

import Card from '../../components/card/card.component'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';

import {sendArrangeMail} from '../../mailgun/mailgun.config'


class ArrangePage extends React.Component {
    constructor(props){
        super(props)

        this.handleDayClick = this.handleDayClick.bind(this);
        
        this.state = {
            selectedDay: '',
            name: '',
            instagram: '',
            email:'',
            message: '',
            mailSent: false
        }
    }


    handleSubmit=async(event)=>{   
        event.preventDefault();
        if(!this.state.selectedDay){
            alert('Unesite željeni datum slikanja!')
        }
        const mail =  await sendArrangeMail(this.state.name, this.state.email, this.state.message, this.state.instagram, this.state.selectedDay.toLocaleDateString())

        this.setState({
            mailSent: mail
      })

      if(this.state.mailSent){
        this.setState({
            selectedDay: '',
            name: '',
            instagram: '',
            email:'',
            message: '',
            mailSent: mail
        })
        alert('Vaš mail je uspešno poslat!');
        this.props.history.push('/')
    }else {
        alert('Došlo je dogreške, pokušajte ponovo!')
      }
    }

    handleChange = event => {
        const {value, name } = event.target
        this.setState({ [name]: value })
    }
    
    handleDayClick(day, { selected }) {
        this.setState({ selectedDay: selected ? undefined : day });
      }


    render(){
        return(
        <div className='arrange'>
            <Card noPadding flexRow className='card'>
            <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                    <div className="left">
                    <h2>Zakazivanje</h2>
                        <p>Za zakazivanje slikanja popunite formu:</p>
                            <FormInput name="name" type="text" value={this.state.name} label="Ime*" handleChange={this.handleChange} required />
                            <FormInput name="instagram" type="text" value={this.state.instagram} label="Instagram" handleChange={this.handleChange} />
                            <FormInput name="email" type="email" value={this.state.email} label="Email*" handleChange={this.handleChange} required />
                            <FormInput name="message" textArea type="text" value={this.state.message} label="Poruka*" handleChange={this.handleChange} style={{height: '100px'}} required />
                            {/* <FormInput name="selectedDay" type="text" value={this.state.selectedDay} label="Datum (dogovor)" handleChange={this.handleChange} required /> */}

                    </div>
                    <div className="right">
                        <p>Izaberite željeni datum slikanja</p>
                        <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} fromMonth={new Date()} />
                    </div>
                </div>
                <CustomButton type="submit" value='Submit Form'>Pošalji</CustomButton>
            </form>
            </Card>
        </div>
        )}
        
}

export default ArrangePage