import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import SubscriptionModal from "../../components/windows/modal/subscription/Subscription.component";
import Header from "../../structures/header/Header.component";
import Main from "../../structures/main/Main.component";
import Section from "../../structures/section/Section.component";
import Image from "../../components/image/Image.component";
import Button from "../../components/button/Button.component";
import { getRequestt } from "../../data/helpers/httpHelper";
import { products } from "../../data/mockup/shop-items.json";

import "../../components/shopItems/shop-items.style.scss";
import "./product.style.scss";

const Product = (props) => {
    // const [productCollection, setProductCollection] = useState([{}]);
    const [product, setProduct] = useState([]);
    let [quantity, setQuantity] = useState(1);
    const subModalContainerRef = useRef(null);

    //update state
    useEffect(() => {
        getRequestt(products).then((res) => {
            res.filter((res) => {
                return res.id === props.match.params.productId;
            }).map((res) => setProduct([res]));
        });
    }, [props.match.params.productId]);

    //popup subscription modal
    useEffect(() => {
        let showTimeOut;
        showTimeOut = setTimeout(() => {
            subModalContainerRef.current.style.display = "block";
        }, 5000);

        return () => {
            clearTimeout(showTimeOut);
        };
    }, []);

    return product.length ? (
        <>
            <Header className="container product-component-header" />
            <Main>
                <div className="container shop-items-container">
                    <ul className="product-container">
                        {product.map((product) => (
                            <li key={product.id}>
                                <Section>
                                    <Image src={product.image} />

                                    <h3>{product.name}</h3>
                                    <p>Summary: {product.description}</p>
                                    <p className="desc">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatem, consectetur! Provident mollitia laborum facilis
                                        sunt? Ab nam rerum, harum at nemo quas doloribus culpa vel
                                        expedita maxime repudiandae numquam! Quasi facere blanditiis
                                        officia repellat, cupiditate amet fuga fugiat praesentium
                                    </p>

                                    <p className="price">Price: {product.price}</p>
                                    <div className="quantity-wrapper">
                                        <Button
                                            onClick={() => setQuantity(--quantity)}
                                            disabled={quantity < 2}
                                        >
                                            <i className="fa fa-minus"></i>
                                        </Button>
                                        <p>{quantity}</p>
                                        <Button onClick={() => setQuantity(++quantity)}>
                                            <i className="fas fa-plus"></i>
                                        </Button>
                                    </div>
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
