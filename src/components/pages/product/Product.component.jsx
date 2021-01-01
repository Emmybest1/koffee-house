import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SubscriptionModal from '../../partials/modals/subscription/Subscription.component';
import Header from '../../structures/header/Header.component';
import Main from '../../structures/main/Main.component';
import Button from '../../partials/button/Button.component';
import {getRequestt} from '../../../data/api/httpRequest';
import {products} from '../../../data/db/db.db.json';
import '../../partials/shopItems/shop-items.style.scss';
import './product.style.scss';

const Product = (props) => {
  const [shouldMountSubscriptionModal, setShouldMountSubscriptionModal] = useState(false);
  const [product, setProduct] = useState([]);
  let [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getRequestt(products).then((res) => {
      res
        .filter((res) => {
          return res.id === props.match.params.productId;
        })
        .map((res) => setProduct([res]));
    });
  }, [props.match.params.productId]);

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setShouldMountSubscriptionModal(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return product.length ? (
    <>
      <Header className="container product-component-header" itemsInCart={1} />
      <Main>
        <div className="container shop-items-container">
          <ul className="product-container">
            {product.map((product) => (
              <li key={product.id}>
                <section>
                  <img src={product.image} alt="" style={{width: '250px'}} />
                  <h3>{product.name}</h3>
                  <p>Summary: {product.description}</p>
                  <p className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, consectetur! Provident
                    mollitia laborum facilis sunt? Ab nam rerum, harum at nemo quas doloribus culpa vel expedita maxime
                    repudiandae numquam! Quasi facere blanditiis officia repellat, cupiditate amet fuga fugiat
                    praesentium
                  </p>
                  <p className="price">Price: {product.price * quantity}</p>
                  <div className="quantity-wrapper">
                    <Button onClick={() => setQuantity(--quantity)} disabled={quantity < 2}>
                      <i className="fa fa-minus"></i>
                    </Button>
                    <p className="quantity">{quantity}</p>
                    <Button
                      onClick={() => {
                        setQuantity((quantity) => ++quantity);
                      }}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>
                  </div>
                </section>

                <Link to="/cart" className="add-to-cart-btn">
                  <i className="fa fa-cart-plus"></i> Add to Cart
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Main>
      <>{shouldMountSubscriptionModal && <SubscriptionModal />}</>
    </>
  ) : (
    <p>Cart is currently empty</p>
  );
};
export default Product;
