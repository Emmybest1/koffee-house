import React, { useState, useEffect, lazy } from "react";
import { withRouter } from "react-router-dom";

import { products } from "../../data/mockup/shop-items.json";
import "./shop-items.style.scss";

const Section = lazy(() => import("../../structures/section/Section.component"));
const Li = lazy(() => import("../li/Li.component"));
const Image = lazy(() => import("../image/Image.component"));

const ShopItems = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        let isMounted = true;
        import("../../data/helpers/httpHelper").then((httpReq) => {
            httpReq.getRequestt(products).then((res) => {
                if (isMounted) setProduct(res);
            });
        });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="container shop-items-container">
            <ul>
                {product.map((item) => {
                    return (
                        <Li
                            key={item.id.toString()}
                            onClick={() => props.history.push(`/product/${item.id}`)}
                        >
                            <Section>
                                <Image src={item.image} />
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>${Number(item.price)}</p>
                            </Section>
                        </Li>
                    );
                })}
            </ul>
        </div>
    );
};

export default withRouter(ShopItems);
