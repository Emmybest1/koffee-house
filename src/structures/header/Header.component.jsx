import React, { Fragment, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import MenuItem from "../../components/menu/MenuItems.component";
import "./header.style.scss";

const Header = () => {
    const [itemsInCart] = useState(0);
    const menuItemRef = useRef(null);

    const openMenuItems = () => {
        menuItemRef.current.showMenuItem();
    };

    return (
        <Fragment>
            <header className="container-flex">
                <div className="container-flex-menu__bar" onClick={openMenuItems}>
                    <span className="top"></span>
                    <span className="bottom"></span>
                </div>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                    alt=""
                    className="logo"
                />
                <NavLink to="/cart" className="items-in-cart">
                    <i className="fa fa-shopping-cart"></i> {itemsInCart}
                </NavLink>
            </header>

            <MenuItem ref={menuItemRef} />
        </Fragment>
    );
};
export default Header;
