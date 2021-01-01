import React from 'react';
import {withRouter} from 'react-router-dom';
import {products} from '../../../data/db/db.db.json';
import './shop-items.style.scss';

const ShopItems = (props) => {
  return (
    <div className="container shop-items-container">
      <ul>
        {products.map((item) => {
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

export default withRouter(ShopItems);
