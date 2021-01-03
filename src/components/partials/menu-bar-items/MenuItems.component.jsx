import React, {forwardRef, useState, useRef, useImperativeHandle} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {useUniqueIds} from '../../../hooks/useUniqueIds';
import {signOutUserRequest} from '../../../redux/root.actions';
import {selectUser} from '../../../redux/user/user.selector';
import Button from '../button/Button.component';
import Input from '../input/Input.component';
import './menu-items.style.scss';

const MenuItems = forwardRef((props, ref) => {
  const [isUserLoggedInFromLocalStorage] = useState(
    () => JSON.parse(window.localStorage.getItem('isUserLoggedIn')) ?? null
  );
  const [searchInputId] = useUniqueIds(1);
  const menuItemRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  // const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const user = useSelector(selectUser);

  useImperativeHandle(ref, () => ({
    showMenuItem: () => {
      menuItemRef.current.style.display = 'block';
    },
  }));

  const closeMenuItems = () => {
    menuItemRef.current.style.display = 'none';
  };

  return (
    <div className="menu-items-wrapper" ref={menuItemRef}>
      <span className="container-flex cancel-search-wrapper">
        <Input type="search" id={searchInputId} placeholder="Search Coffee" aria-label="Search Coffee" />
        <span onClick={closeMenuItems}>
          <i className="fa fa-times"></i>
        </span>
      </span>
      <ul>
        <li>
          <NavLink to="/" className="link">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="link">
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className="link">
            WISHLIST
          </NavLink>
        </li>
      </ul>

      {user && (
        <div className="user-profile">
          <img src={`${process.env.PUBLIC_URL}/assets/images/avatar.svg`} alt="" />
          <p>{user?.name}</p>
        </div>
      )}

      <div className="currency-wrapper">
        <h3>Currency</h3>
        <div>
          <div className="container-flex">
            <span className="container-flex">
              <img src={`${process.env.PUBLIC_URL}/assets/images/usd.png`} alt="" /> USD
            </span>
            <span className="container-flex">
              <img src={`${process.env.PUBLIC_URL}/assets/images/euro.png`} alt="" /> EUR
            </span>
          </div>

          <div className="container-flex">
            <span className="container-flex">
              <img src={`${process.env.PUBLIC_URL}/assets/images/aud.png`} alt="" /> AUD
            </span>
            <span className="container-flex">
              <img src={`${process.env.PUBLIC_URL}/assets/images/gbp.png`} alt="" /> GBP
            </span>
          </div>

          <Button
            className={`log-btn ${isUserLoggedInFromLocalStorage ? 'logout-btn' : 'login-btn'}`}
            onClick={async () => {
              await dispatch(signOutUserRequest());
              history.push('/login');
            }}
          >
            {isUserLoggedInFromLocalStorage ? 'Logout' : 'Login'}
          </Button>
        </div>
      </div>
    </div>
  );
});

export default MenuItems;
