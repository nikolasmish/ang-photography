import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ onClick, children, ...otherProps }) => (
    <button className={`custom-button`} { ...otherProps }>
        {children}
    </button>
)

export default CustomButton