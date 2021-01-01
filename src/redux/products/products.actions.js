import {types} from './products.types';
import {api} from '../../data/api/httpRequest';

export const fetchProductsRequestStarted = () => ({
  type: types.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (payload) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsFailure = (payload) => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload,
});

export const fetchProductsRequest = () => (dispatch) => {
  dispatch(fetchProductsRequestStarted());
  api
    .get('http://localhost:4000/products?_sort=name=asc')
    .then((res) => {
      dispatch(fetchProductsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchProductsFailure(error.message));
    });
};
