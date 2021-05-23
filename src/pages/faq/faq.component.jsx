import React from 'react'

import './faq.styles.scss'

import Accordion from '../../components/accordion/accordion.component'

import {FAQ_DATA} from '../../FAQ_DATA'
import Card from '../../components/card/card.component'

const FaqPage = () =>(
    <div className='faq'>
        <Card>
        <Accordion data={FAQ_DATA} />
        </Card>
    </div>
)

export default FaqPage