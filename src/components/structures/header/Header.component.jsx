import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuItem from '../../partials/menu-bar-items/MenuItems.component';
import './header.style.scss';

const Header = ({className, itemsInCart}) => {
  const menuItemRef = useRef(null);

  const openMenuItems = () => {
    menuItemRef.current.showMenuItem();
  };

  return (
    <>
      <header className={`container-flex ${className}`}>
        <div className="container-flex-menu__bar" onClick={openMenuItems}>
          <span className="top"></span>
          <span className="bottom"></span>
        </div>
        <NavLink to="/" className="logo-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" className="logo" />
        </NavLink>
        <NavLink to="/cart" className="items-in-cart">
          <i className="fa fa-shopping-cart"></i> {itemsInCart}
        </NavLink>
      </header>
      <MenuItem ref={menuItemRef} />
    </>
  );
};
Header.propTypes = {
  className: PropTypes.string,
  itemsInCart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default Header;
