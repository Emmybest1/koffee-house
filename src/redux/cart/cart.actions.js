import {types} from './cart.types';
import {api} from '../../data/api/httpRequest';

/***
 * @action : fetch items actions
 */
export const fetchCartItemsRequestStarted = () => ({
  type: types.FETCH_CART_ITEMS_REQUEST,
});

export const fetchCartItemsSuccess = (payload) => ({
  type: types.FETCH_CART_ITEMS_SUCCESS,
  payload,
});

export const fetchCartItemsFailure = (payload) => ({
  type: types.FETCH_CART_ITEMS_FAILURE,
  payload,
});

export const fetchCartItemsRequest = () => (dispatch) => {
  dispatch(fetchCartItemsRequestStarted());
  api
    .get('')
    .then((res) => {
      dispatch(fetchCartItemsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchCartItemsFailure(error.message));
    });
};

/***
 * @action : post items actions
 */
export const postItemToCartRequestStarted = () => ({
  type: types.POST_ITEM_TO_CART_REQUEST,
});

export const postItemToCartSuccess = (payload) => ({
  type: type.POST_ITEM_TO_CART_SUCCESS,
  payload,
});

export const postItemToCartFailure = (payload) => ({
  type: types.POST_ITEM_TO_CART_FAILURE,
  payload,
});

export const postItemToCartRequest = (data) => (dispatch) => {
  dispatch(postItemToCartRequestStarted());
  api.post('').then(() => {
    dispatch(postItemToCartSuccess(data)).catch((error) => {
      dispatch(postItemToCartFailure(error.message));
    });
  });
};
