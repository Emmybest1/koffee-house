import React, {useEffect, useState, useRef} from 'react';
import {products} from '../../../data/db/db.db.json';
import Header from '../../structures/header/Header.component';
import Main from '../../structures/main/Main.component';
import Footer from '../../structures/footer/Footer.component';
import ShopItems from '../../partials/shopItems/ShopItems.component';
import ShopSorting from '../../partials/shop-sorting/ShopSorting.component';
import './shop.style.scss';

const Shop = () => {
  let [count, setCount] = useState(0);
  const coffeeCountRef = useRef(null);

  useEffect(() => {
    let countInterval;
    countInterval = setInterval(() => {
      if (parseInt(coffeeCountRef.current.innerText) < parseInt(products.length)) {
        setCount(count++);
      }
    }, 300);

    return () => clearInterval(countInterval);
  }, [count]);

  return (
    <>
      <Header itemsInCart={1} />
      <Main>
        <img src={`${process.env.PUBLIC_URL}/assets/images/shop-bg.jpg`} alt="" />
        <h2>Products</h2>
        <p className="coffee-count">
          We have <span ref={coffeeCountRef}> {count} </span>
          types of Coffee
        </p>
        <ShopSorting />
        <ShopItems />
      </Main>
      <Footer />
    </>
  );
};

export default Shop;
