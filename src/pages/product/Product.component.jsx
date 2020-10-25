import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../structures/header/Header.component";
import Section from "../../structures/section/Section.component";
import Image from "../../components/image/Image.component";
import { getRequestt } from "../../data/helpers/httpHelper";
import { products } from "../../data/mockup/shop-items.json";
import "../../components/shopItems/shop-items.style.scss";
import "./product.style.scss";

const Product = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getRequestt(products).then((res) => {
            setProduct(res);
        });
    }, []);
    const productId = props.match.params.productId;

    return product.length ? (
        <>
            <Header className="container product-component-header" />
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
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatem, consectetur! Provident mollitia laborum facilis
                                        sunt? Ab nam rerum, harum at nemo quas doloribus culpa vel
                                        expedita maxime repudiandae numquam! Quasi facere blanditiis
                                        officia repellat, cupiditate amet fuga fugiat praesentium
                                    </p>
                                </Section>
                                <Link to="/cart" className="add-to-cart-btn">
                                    <i class="fa fa-cart-plus"></i> Add to Cart
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    ) : (
        <p>Cart is currently empty</p>
    );
};
export default Product;
