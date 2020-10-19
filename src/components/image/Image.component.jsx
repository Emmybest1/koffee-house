import React from "react";
import PropType from "prop-types";

const Image = ({ src, alt, ...otherProps }) => {
    return <img src={src} alt={alt} {...otherProps} />;
};

Image.defaultProps = {
    alt: "",
};

Image.propType = {
    src: PropType.string.isRequired,
    alt: PropType.string,
};

export default Image;
