import React from 'react'
import AccordionOption from '../accordion-option/accordion-option.component'

import './accordion.styles.scss'


const Accordion = ({ data }) => (
    <div className='accordion'>
        {
            data.map(item => {
                return <AccordionOption key={item.id} id={item.id} question={item.question} answer={item.answer} />
            })
        }
        
    </div>
)

export default Accordion