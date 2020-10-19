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

    useEffect(() => {
        console.log(counter);
        const COFFEE_IN_CLIENT_SIDE = Number(coffeeCountRef.current.innerText);
        const COFFEE_IN_SERVER_SIDE = Number(products.length);
        counter(COFFEE_IN_CLIENT_SIDE, COFFEE_IN_SERVER_SIDE);
        console.log(COFFEE_IN_CLIENT_SIDE, COFFEE_IN_SERVER_SIDE);
    }, []);

    return (
        <div>
            <Header />
            <Main>
                <Image src={`${process.env.PUBLIC_URL}/assets/images/shop-bg.jpg`} />
                <h2>Products</h2>
                <p className="coffee-count">
                    We have <span ref={coffeeCountRef}> {0} </span>
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
