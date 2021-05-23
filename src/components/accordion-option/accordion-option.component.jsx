import React from 'react'

import './accordion-option.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'

const openAnswer = (id) => {
    const options = document.getElementsByClassName('answer')

    if(options[id-1].style.maxHeight){
        options[id-1].style.maxHeight = null
    }else{
        options[id-1].style.maxHeight = options[id-1].scrollHeight + "px"

    }
}

class AccordionOption extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render(){
        const {props = this.props, isOpen} = this.state
        return(
            <div className='option'>
                <div className='question' onClick={() => {
                    this.setState({isOpen: !isOpen})
                    openAnswer(props.id)
                    }} >
                    <h2>{props.question}</h2>
                    <FontAwesomeIcon className={isOpen ? 'opened' : 'closed'} icon={faArrowCircleDown} />
                    </div>
                <div className={`answer ${isOpen ? 'opened' : ''}`}>{props.answer}</div>
            </div>
        )
    }
}


export default AccordionOption
