import React from 'react'

import './card.styles.scss'

const Card = (props) => (
    <div className='card'>
        {props.children}
    </div>
)

export default Card