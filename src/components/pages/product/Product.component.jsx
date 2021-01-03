import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {fetchProductRequest, postItemToCartRequest} from '../../../redux/root.actions';
import {selectIsLoading, selectError, selectProduct} from '../../../redux/product/product.selector';
import {selectUser} from '../../../redux/user/user.selector';
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
  const history = useHistory();
  const dispatch = useDispatch();
  const productFetchingIsLoading = useSelector(selectIsLoading);
  const productFetchingError = useSelector(selectError);
  const product = useSelector(selectProduct);
  const user = useSelector(selectUser);

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
      <Header className="container product-component-header" />
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
                <p className="price">Price:$ {Math.round(product.price * quantity)}</p>
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

              <Button
                className="add-to-cart-btn"
                onClick={async () => {
                  const itemToPostToCart = {
                    'api-key': user['api-key'],
                    name: product.name,
                    price: Math.round(product.price * quantity),
                    image: product.image,
                    currency: 'dollars',
                    'shipping-address': 'xxxxx-xxxx',
                    quantity,
                  };
                  await dispatch(postItemToCartRequest(itemToPostToCart));
                  history.push(`/cart`);
                }}
              >
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
