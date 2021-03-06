import {types} from './product.types';
import {api} from '../../data/api/httpRequest';

export const fetchProductRequestStarted = () => ({
  type: types.FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (payload) => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  payload,
});

export const fetchProductFailure = (payload) => ({
  type: types.FETCH_PRODUCT_FAILURE,
  payload,
});

export const fetchProductRequest = (productId) => (dispatch) => {
  dispatch(fetchProductRequestStarted());

  api
    .get(`${process.env.REACT_APP_DEV_URL}products?id=${productId}`)
    .then((res) => {
      dispatch(fetchProductSuccess(res.data));
    })
    .catch((error) => {
      console.error(error.message);
      dispatch(fetchProductFailure(error.message));
    });
};
