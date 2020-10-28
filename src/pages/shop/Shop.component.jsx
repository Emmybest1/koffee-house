import React, { useEffect, useState, useRef } from "react";

import { products } from "../../data/mockup/shop-items.json";
import Main from "../../structures/main/Main.component";
import Header from "../../structures/header/Header.component";
import Image from "../../components/image/Image.component";
import ShopItems from "../../components/shopItems/ShopItems.component";
import ShopSorting from "../../components/shop-sorting/ShopSorting.component";
import Footer from "../../structures/footer/Footer.component";
import "./shop.style.scss";

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
            <Header />
            <Main>
                <Image src={`${process.env.PUBLIC_URL}/assets/images/shop-bg.jpg`} />
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
