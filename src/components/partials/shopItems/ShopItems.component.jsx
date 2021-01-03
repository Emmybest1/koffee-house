import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import './shop-items.style.scss';

const ShopItems = (props) => {
  return (
    <div className="container shop-items-container">
      <ul>
        {props.products.map((item) => {
          return (
            <li key={item.id.toString()} onClick={() => props.history.push(`/product/${item.id}`)}>
              <section>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${Number(item.price)}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ShopItems.propTypes = {
  products: PropTypes.array,
};
export default withRouter(ShopItems);
