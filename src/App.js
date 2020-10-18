import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage.component";
import Shop from './pages/shop/Shop.component'
import Product from './pages/product/Product.component'
import NotFound from "./pages/notfound/NotFound.component";
import "./app.style.scss";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/product/:productId" component={Product} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
