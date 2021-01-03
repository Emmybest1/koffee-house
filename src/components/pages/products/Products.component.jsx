import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectIsLoading, selectProducts, selectError} from '../../../redux/products/products.selector';
import {fetchProductsRequest} from '../../../redux/root.actions';
import ApiErrorAlert from '../../partials/modals/api-error-alert/ApiErrorAlert.component';
import Loader from '../../partials/loader/Loader.component';
import Header from '../../structures/header/Header.component';
import Main from '../../structures/main/Main.component';
import Footer from '../../structures/footer/Footer.component';
import ShopItems from '../../partials/shopItems/ShopItems.component';
import ShopSorting from '../../partials/shop-sorting/ShopSorting.component';
import './products.style.scss';

const Products = () => {
  let [count, setCount] = useState(0);
  const coffeeCountRef = useRef(null);
  const dispatch = useDispatch();
  const productsFetchingIsLoading = useSelector(selectIsLoading);
  const productsFetchingErrorMessage = useSelector(selectError);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  useEffect(() => {
    let countInterval;
    countInterval = setInterval(() => {
      if (parseInt(coffeeCountRef.current.innerText) < parseInt(products.length)) {
        setCount(count++);
      }
    }, 300);
    return () => clearInterval(countInterval);
  }, [products, count]);

  return (
    <>
      <Header itemsInCart={1} />
      <Main className="products-main">
        <img src={`${process.env.PUBLIC_URL}/assets/images/shop-bg.jpg`} alt="" />
        <h2>Products</h2>
        <p className="coffee-count">
          We have <span ref={coffeeCountRef}> {count} </span>
          types of Coffee
        </p>
        <ShopSorting />
        <ShopItems products={products} />
      </Main>
      <Footer />
      <Loader isLoading={productsFetchingIsLoading} />
      <ApiErrorAlert errorHeading="Error Fetching Products" apiErrorMessage={productsFetchingErrorMessage} />
    </>
  );
};

export default Products;
