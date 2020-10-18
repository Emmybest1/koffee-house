import React from 'react'
import PropTypes from 'prop-types'

import './button.style.scss'
const Button = ({ buttonText, children, ...otherProps }) => {
    return (
        <button {...otherProps}>{buttonText}
            {children}
        </button>
    )
}
Button.defaultProps = {
    url: "/"
}
Button.propTypes = {
    url: PropTypes.string,
    buttonText: PropTypes.string,
    children: PropTypes.node
}
export default Button
