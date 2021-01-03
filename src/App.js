import React, {Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {signInUserRequest} from './redux/root.actions';
import ErrorBoundary from './components/pages/error-boundary/ErrorBoundary.component';
import NotFound from './components/pages/not-found/NotFound.component';
import './app.style.scss';

const Home = lazy(() => import('./components/pages/home/Home.component'));
const Products = lazy(() => import('./components/pages/products/Products.component'));
const Product = lazy(() => import('./components/pages/product/Product.component'));
const Login = lazy(() => import('./components/pages/auth/login/Login.component'));

const App = () => {
  const dispatch = useDispatch();
  const [isUserLoggedInFromLocalStorage] = useState(
    () => JSON.parse(window.localStorage.getItem('isUserLoggedIn')) ?? null
  );
  const [loginDetails] = useState(() => window.localStorage.getItem('loginDetails') ?? {});

  useEffect(() => {
    if (isUserLoggedInFromLocalStorage) {
      dispatch(signInUserRequest(JSON.parse(loginDetails)));
    }
  }, [dispatch, isUserLoggedInFromLocalStorage, loginDetails]);

  return (
    <>
      <a href="#main" id="skipToMainContent">
        Skip to main content
      </a>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={Products} />
              <Route exact path="/product/:productId" component={Product} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </>
  );
};

export default App;
