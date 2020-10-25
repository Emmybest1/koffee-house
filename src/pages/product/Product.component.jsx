import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import SubscriptionModal from "../../components/windows/modal/subscription/Subscription.component";
import Header from "../../structures/header/Header.component";
import Section from "../../structures/section/Section.component";
import Image from "../../components/image/Image.component";
import { getRequestt } from "../../data/helpers/httpHelper";
import { products } from "../../data/mockup/shop-items.json";
import Main from "../../structures/main/Main.component";
import "../../components/shopItems/shop-items.style.scss";
import "./product.style.scss";

const Product = (props) => {
    const [product, setProduct] = useState([]);
    const subModalContainerRef = useRef(null);

    //update state
    useEffect(() => {
        getRequestt(products).then((res) => {
            setProduct(res);
        });
    }, []);

    //popup subscription modal
    useEffect(() => {
        let showTimeOut;
        showTimeOut = setTimeout(() => {
            subModalContainerRef.current.style.display = "block";
        }, 5000);

        return () => {
            clearTimeout(showTimeOut);
        };
    });

    //get product_id
    const productId = props.match.params.productId;

    return product.length ? (
        <>
            <Header className="container product-component-header" />
            <Main>
                <div className="container shop-items-container">
                    <ul className="product-container">
                        {product
                            .filter((product) => {
                                return product.id.toString() === productId.toString();
                            })
                            .map((product) => (
                                <li key={product.id}>
                                    <Section>
                                        <Image src={product.image} />
                                        <h3>{product.name}</h3>
                                        <p>Summary: {product.description}</p>
                                        <p className="desc">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing
                                            elit. Voluptatem, consectetur! Provident mollitia
                                            laborum facilis sunt? Ab nam rerum, harum at nemo quas
                                            doloribus culpa vel expedita maxime repudiandae numquam!
                                            Quasi facere blanditiis officia repellat, cupiditate
                                            amet fuga fugiat praesentium
                                        </p>
                                    </Section>
                                    <Link to="/cart" className="add-to-cart-btn">
                                        <i className="fa fa-cart-plus"></i> Add to Cart
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Subscribe modal */}
                <div className="sub-modal-container" ref={subModalContainerRef}>
                    <SubscriptionModal />
                </div>
            </Main>
        </>
    ) : (
        <p>Cart is currently empty</p>
    );
};
export default Product;
