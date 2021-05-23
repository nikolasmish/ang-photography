import React from 'react'

import './faq.styles.scss'

import Accordion from '../../components/accordion/accordion.component'

import {FAQ_DATA} from '../../FAQ_DATA'

const FaqPage = () =>(
    <div className='faq'>
        <Accordion data={FAQ_DATA} />
    </div>
)

export default FaqPage