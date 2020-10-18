import React from 'react'
import PropType from 'prop-types'


const Section = ({ className, children, ...otherProps }) => {
    return (
        <section className={className} {...otherProps}>{children}</section>
    )
}

Section.propType = {
    className: PropType.string,
    children: PropType.node.isRequired
}

export default Section
