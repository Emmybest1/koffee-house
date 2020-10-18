import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.style.scss";

const LandingPage = lazy(() => import("./pages/landing/LandingPage.component"));
const Shop = lazy(() => import("./pages/shop/Shop.component"));
const Product = lazy(() => import("./pages/product/Product.component"));
const NotFound = lazy(() => import("./pages/notfound/NotFound.component"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/product/:productId" component={Product} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
