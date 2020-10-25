import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SubscriptionModal from "./components/windows/modal/subscription/Subscription.component";
import ErrorBoundary from "./pages/error-boundary/ErrorBoundary.component";
import "./app.style.scss";

const LandingPage = lazy(() => import("./pages/landing/LandingPage.component"));
const Shop = lazy(() => import("./pages/shop/Shop.component"));
const Product = lazy(() => import("./pages/product/Product.component"));
const NotFound = lazy(() => import("./pages/notfound/NotFound.component"));

const App = () => {
    return (
        <Router>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/shop" component={Shop} />
                        <Route exact path="/product/:productId" component={Product} />
                        <Route exact path="/sub" component={SubscriptionModal} />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </Router>
    );
};

export default App;
