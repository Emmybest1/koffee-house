import {combineReducers} from 'redux';
import {reducer as products} from './products/products.reducer';
import {reducer as product} from './product/product.reducer';
import {reducer as cart} from './cart/cart.reducer';

export const rootReducer = combineReducers({
  product,
  products,
  cart,
});
