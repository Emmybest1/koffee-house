import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCartItemsRequest} from '../../../redux/root.actions';
import {selectIsLoading, selectError, selectCartItems} from '../../../redux/cart/cart.selector';
import {selectUser} from '../../../redux/user/user.selector';
import ApiErrorAlert from '../../partials/modals/api-error-alert/ApiErrorAlert.component';
import Loader from '../../partials/loader/Loader.component';
import Main from '../../structures/main/Main.component';
import CartItem from '../cart-item/cart-item.component';
import './cart.style.scss';

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItemsFetchingIsLoading = useSelector(selectIsLoading);
  const cartItemsFetchingError = useSelector(selectError);
  const cartItems = useSelector(selectCartItems);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCartItemsRequest(user['api-key']));
  }, [dispatch, user]);

  return (
    <>
      <Main>
        <div className="cart-container">
          <div className="cart-container-div__one">
            <i className="fa fa-home" onClick={() => history.push('/')}></i>
            <h3 className="cart-heading">Cart</h3>
          </div>
          <CartItem items={cartItems} />
        </div>
      </Main>
      <Loader isLoading={cartItemsFetchingIsLoading} />
      <ApiErrorAlert errorHeading="Error Fetching Cart items" apiErrorMessage={cartItemsFetchingError} />
    </>
  );
};

export default Cart;
