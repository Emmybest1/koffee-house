import {combineReducers} from 'redux';
import {reducer as products} from './products/products.reducer';
import {reducer as product} from './product/product.reducer';
import {reducer as cart} from './cart/cart.reducer';
import {reducer as user} from './user/user.reducer';

export const rootReducer = combineReducers({
  product,
  products,
  cart,
  user,
});
