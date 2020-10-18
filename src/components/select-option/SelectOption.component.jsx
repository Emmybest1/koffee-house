import React from 'react'
import PropType from 'prop-types'

import './select-option.style.scss'
const SelectOption = ({ name, id, children, ...otherProps }) => {
    return (
        <div>
            <select name={name} id={id} {...otherProps}>
                {children}
            </select>
        </div>
    )
}

SelectOption.propType = {
    name: PropType.string.isRequired,
    children: PropType.node.isRequired,
    id: PropType.oneOfType([PropType.string.isRequired, PropType.number.isRequired])
}
export default SelectOption
