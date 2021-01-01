import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorBoundary from './components/pages/error-boundary/ErrorBoundary.component';
import './app.style.scss';

const LandingPage = lazy(() => import('./components/pages/home-page/homePage.component'));
const Shop = lazy(() => import('./components/pages/shop/Shop.component'));
const Product = lazy(() => import('./components/pages/product/Product.component'));
const NotFound = lazy(() => import('./components/pages/notfound/NotFound.component'));

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/product/:productId" component={Product} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
