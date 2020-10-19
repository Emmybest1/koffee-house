import React, { lazy } from "react";

import "./shop.style.scss";

const Header = lazy(() => import("../../structures/header/Header.component"));
const Image = lazy(() => import("../../components/image/Image.component"));
const Main = lazy(() => import("../../structures/main/Main.component"));
const ShopItems = lazy(() => import("../../components/shopItems/ShopItems.component"));
const ShopSorting = lazy(() => import("../../components/shop-sorting/ShopSorting.component"));
const Footer = lazy(() => import("../../structures/footer/Footer.component"));

const Shop = () => {
    return (
        <div>
            <Header />
            <Main>
                <Image src={`${process.env.PUBLIC_URL}/assets/images/shop-bg.jpg`} />
                <h2>Products</h2>
                <ShopSorting />
                <ShopItems />
            </Main>
            <Footer />
        </div>
    );
};

export default Shop;
