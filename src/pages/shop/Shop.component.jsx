import React, { useEffect, useRef } from "react";

import counter from "../../components/counter/Counter.component";
import { products } from "../../data/mockup/shop-items.json";
import Main from "../../structures/main/Main.component";
import Header from "../../structures/header/Header.component";
import Image from "../../components/image/Image.component";
import ShopItems from "../../components/shopItems/ShopItems.component";
import ShopSorting from "../../components/shop-sorting/ShopSorting.component";
import Footer from "../../structures/footer/Footer.component";
import "./shop.style.scss";

const Shop = () => {
    const coffeeCountRef = useRef(null);
    const productCount = products.length;

    useEffect(() => {
        const COFFEE_COUNT_REF_INNER_TEXT = coffeeCountRef;
        console.log(coffeeCountRef.current);
    }, []);

    return (
        <div>
            <Header />
            <Main>
                <Image src={`${process.env.PUBLIC_URL}/assets/images/shop-bg.jpg`} />
                <h2>Products</h2>
                <p className="coffee-count">
                    We have <span ref={coffeeCountRef}>4</span>
                    types of Coffee
                </p>
                <ShopSorting />
                <ShopItems />
            </Main>
            <Footer />
        </div>
    );
};

export default Shop;
