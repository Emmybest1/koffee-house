import React, { Suspense, lazy, forwardRef, useRef, useImperativeHandle } from 'react'
import { NavLink } from 'react-router-dom'

import { useUniqueIds } from '../../hooks/useUniqueIds'
import './menu-items.style.scss'

const Input = lazy(() => import("../input/Input.component"));
const Image = lazy(() => import("../image/Image.component"));

const MenuItems = forwardRef((prop, ref) => {
  const [searchInputId] = useUniqueIds(1)
  const menuItemRef = useRef(null)


  useImperativeHandle(ref, () => ({
    showMenuItem: () => {
      menuItemRef.current.style.display = "block";
    }
  }))

  const closeMenuItems = () => {
    menuItemRef.current.style.display = "none"
  }

  return (
    <div className="menu-items-wrapper" ref={menuItemRef}>
      <Suspense fallback={<div>Loading...</div>}>
        <span className="container-flex cancel-search-wrapper"><Input type="search" id={searchInputId} placeholder="Search Coffee" />
          <span onClick={closeMenuItems}><i className="fa fa-times"></i></span></span>
        <ul>
          <li>
            <NavLink to="/" className="link">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="link">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/pages" className="link">PAGES</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="link">WISHLIST</NavLink>
          </li>
        </ul>

        <div className="currency-wrapper">
          <h3>Currency</h3>
          <div>
            <div className="container-flex">
              <span className="container-flex"><Image src={`${process.env.PUBLIC_URL}/assets/images/usd.png`} alt="" /> USD</span>
              <span className="container-flex"><Image src={`${process.env.PUBLIC_URL}/assets/images/euro.png`} alt="" /> EUR</span>
            </div>

            <div className="container-flex">
              <span className="container-flex"><Image src={`${process.env.PUBLIC_URL}/assets/images/aud.png`} alt="" /> AUD</span>
              <span className="container-flex"><Image src={`${process.env.PUBLIC_URL}/assets/images/gbp.png`} alt="" /> GBP</span>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
});

export default MenuItems
