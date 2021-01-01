import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchProductRequest} from '../../../redux/root.actions';
import ApiErrorAlert from '../../partials/modals/api-error-alert/ApiErrorAlert.component';
import Loader from '../../partials/loader/Loader.component';
import SubscriptionModal from '../../partials/modals/subscription/Subscription.component';
import Header from '../../structures/header/Header.component';
import Main from '../../structures/main/Main.component';
import Button from '../../partials/button/Button.component';
import './product.style.scss';

const Product = ({match}) => {
  const [shouldMountSubscriptionModal, setShouldMountSubscriptionModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const productFetchingIsLoading = useSelector((state) => state.product.isLoading);
  const productFetchingError = useSelector((state) => state.product.error);
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(fetchProductRequest(match.params.productId));
  }, [match.params.productId, dispatch]);

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      setShouldMountSubscriptionModal(true);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return product && Object.entries(product).length ? (
    <>
      <Header className="container product-component-header" itemsInCart={1} />
      <Main>
        <div className="container shop-items-container">
          <ul className="product-container">
            <li>
              <section>
                <img src={product.image} alt="" style={{width: '250px'}} />
                <h3>{product.name}</h3>
                <p>Summary: {product.description}</p>
                <p className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, consectetur! Provident mollitia
                  laborum facilis sunt? Ab nam rerum, harum at nemo quas doloribus culpa vel expedita maxime repudiandae
                  numquam! Quasi facere blanditiis officia repellat, cupiditate amet fuga fugiat praesentium
                </p>
                <p className="price">Price:$ {product.price * quantity}</p>
                <div className="quantity-wrapper">
                  <Button onClick={() => setQuantity((quantity) => --quantity)} disabled={quantity < 2}>
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

              <Button to="/cart" className="add-to-cart-btn">
                <i className="fa fa-cart-plus"></i> Add to Cart
              </Button>
            </li>
          </ul>
        </div>
      </Main>
      <>{shouldMountSubscriptionModal && <SubscriptionModal />}</>
      <Loader isLoading={productFetchingIsLoading} />
      <ApiErrorAlert errorHeading="Error Fetching Product" apiErrorMessage={productFetchingError} />
    </>
  ) : (
    <p>Cart is currently empty</p>
  );
};
export default Product;
