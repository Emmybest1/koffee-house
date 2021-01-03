import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {deleteItemFromCartRequest} from '../../../redux/root.actions';
import './cart-item.style.scss';

const CartItem = ({items}) => {
  const dispatch = useDispatch();

  return items?.length ? (
    <div className="cart-item-container">
      {items.map((item) => (
        <section key={item?.id.toString()}>
          <div className="delete-btn-wrapper">
            <i
              className="fa fa-trash-alt"
              onClick={async () => {
                await dispatch(deleteItemFromCartRequest(item?.id));
              }}
            ></i>
          </div>

          <div className="item-img-wrapper">
            <img src={item.image} alt="" />
          </div>

          <div className="item-content-wrapper">
            <h5 className="name">{item.name}</h5>
            <p className="price">
              {item.currency}
              {''}
              {item.price}
            </p>
          </div>

          <div className="quantity-wrapper">
            <p>quantity: {item.quantity}</p>
          </div>
        </section>
      ))}
    </div>
  ) : (
    <p>Sorry Cart is currently empty</p>
  );
};

CartItem.propTypes = {
  items: PropTypes.array,
};

export default CartItem;
