import React from "react";
import PropType from "prop-types";

import "./main.style.scss";

const Main = ({ children, className, ...otherProps }) => {
    return (
        <main className={className} {...otherProps}>
            {children}
        </main>
    );
};
Main.propType = {
    className: PropType.string,
    children: PropType.node.isRequired,
};

export default Main;
