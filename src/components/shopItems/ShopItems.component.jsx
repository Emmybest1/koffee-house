import React, { Suspense, lazy } from 'react'
import { withRouter } from 'react-router-dom'

import { products } from '../../data/mockup/shop-items.json'
import './shop-items.style.scss'

const Section = lazy(() => import("../../structures/section/Section.component"));
const Li = lazy(() => import("../li/Li.component"));
const Image = lazy(() => import("../image/Image.component"));

const ShopItems = (props) => {
    return (
        <div className="container shop-items-container">
            <Suspense fallback={<div>Loading...</div>}>
                <ul>
                    {products.map(item => {
                        return (
                            // You will add a click listener to the below Li component which will open a specific item based on the item id
                            <Li key={item.id.toString()} onClick={() => props.history.push(`/product/${item.id}`)} >
                                <Section>
                                    <Image src={item.image} />
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>${Number(item.price)}</p>
                                </Section>
                            </Li>
                        )
                    })}
                </ul>
            </Suspense>
        </div>
    )
}

export default withRouter(ShopItems);
