import React, {useState, useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCartItemsRequest} from '../../../redux/root.actions';
import {selectCartItems} from '../../../redux/cart/cart.selector';
import {selectUser} from '../../../redux/user/user.selector';
import MenuItem from '../../partials/menu-bar-items/MenuItems.component';
import InternetConnection from '../../partials/modals/internet-connection/InternetConnection.component';
import './header.style.scss';

const Header = ({className}) => {
  const [shouldPopUpInternetAlert, setShouldPopUpInternetAlert] = useState(false);
  const menuItemRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);

  const noOfItemInCart = cartItems.length;

  const offlineHandler = () => {
    setShouldPopUpInternetAlert(true);
  };

  useEffect(() => {
    if (user && Object.entries(user).length) {
      dispatch(fetchCartItemsRequest(user['api-key']));
    }
  }, [dispatch, user]);

  useEffect(() => {
    window.addEventListener('offline', offlineHandler);
    return () => {
      window.removeEventListener('offline', offlineHandler);
    };
  }, [shouldPopUpInternetAlert]);

  const onlineHandler = () => {
    setShouldPopUpInternetAlert(false);
  };
  useEffect(() => {
    window.addEventListener('online', onlineHandler);
    return () => {
      window.removeEventListener('online', onlineHandler);
    };
  }, [shouldPopUpInternetAlert]);

  const openMenuItems = () => {
    menuItemRef.current.showMenuItem();
  };

  return (
    <>
      <header className={`container-flex ${className}`}>
        <div className="container-flex-menu__bar" data-test="menubar-btn" onClick={openMenuItems}>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
        <NavLink exact to="/" className="logo-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" className="logo" />
        </NavLink>
        <NavLink to="/cart" className="items-in-cart">
          <i className="fa fa-shopping-cart"></i> {noOfItemInCart}
        </NavLink>
      </header>
      <MenuItem ref={menuItemRef} />
      <>{shouldPopUpInternetAlert && <InternetConnection />}</>
    </>
  );
};
Header.propTypes = {
  className: PropTypes.string,
  // itemsInCart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default Header;
