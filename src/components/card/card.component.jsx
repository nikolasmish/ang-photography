import React from 'react'

import './card.styles.scss'

const Card = ({noPadding, flexRow, children}) => (
    <div className={`
    card
    ${noPadding ? 'no-padding' : ''}
    ${flexRow ? 'flex-row' : ''}

    `}>
        {children}
    </div>
)

export default Card