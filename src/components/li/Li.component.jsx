import React from 'react'
import PropType from 'prop-types'

import './li.style.scss'
const Li = ({ className, children, ...otherProps }) => {
    return <li className={className} {...otherProps}>{children}</li>
}

Li.propType = {
    className: PropType.string,
    children: PropType.node
}
export default Li
