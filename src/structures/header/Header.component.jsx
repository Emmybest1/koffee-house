import React, { Fragment, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import MenuItem from "../../components/menu/MenuItems.component";
import "./header.style.scss";

const Header = ({ className }) => {
    const [itemsInCart] = useState(0);
    const menuItemRef = useRef(null);

    const openMenuItems = () => {
        menuItemRef.current.showMenuItem();
    };

    return (
        <Fragment>
            <header className={`container-flex ${className}`}>
                <div className="container-flex-menu__bar" onClick={openMenuItems}>
                    <span className="top"></span>
                    <span className="bottom"></span>
                </div>
                <NavLink to="/" className="logo-wrapper">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                        alt=""
                        className="logo"
                    />
                </NavLink>
                <NavLink to="/cart" className="items-in-cart">
                    <i className="fa fa-shopping-cart"></i> {itemsInCart}
                </NavLink>
            </header>
            <MenuItem ref={menuItemRef} />
        </Fragment>
    );
};
Header.propTypes = {
    className: PropTypes.string,
};
export default Header;
