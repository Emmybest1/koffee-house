import React, { Fragment, useState, useRef, lazy, Suspense } from 'react'
import { NavLink } from 'react-router-dom'

import './header.style.scss'

const MenuItem = lazy(() => import('../../components/menu/MenuItems.component'))
const Header = () => {
    const [itemsInCart] = useState(0)
    const menuItemRef = useRef(null)

    const openMenuItems = () => {
        menuItemRef.current.showMenuItem()
    }

    return (
        <Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <header className="container-flex">
                    <div className="container-flex-menu__bar" onClick={openMenuItems}>
                        <span className="top"></span>
                        <span className="bottom"></span>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" className="logo" />
                    <NavLink to="/cart" className="items-in-cart"><i className="fa fa-shopping-cart"></i> {itemsInCart}</NavLink>
                </header>

                <MenuItem ref={menuItemRef} />
            </Suspense>
        </Fragment>
    )
}
export default Header;
