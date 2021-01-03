import {types} from './cart.types';
import {api} from '../../data/api/httpRequest';

/**********
 *
 * @action fetch items actions
 **********/
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

export const fetchCartItemsRequest = (apiKey) => (dispatch) => {
  dispatch(fetchCartItemsRequestStarted());
  api
    .get(`${process.env.REACT_APP_DEV_URL}cartitems?api-key=${apiKey}`)
    .then((res) => {
      dispatch(fetchCartItemsSuccess(res.data));
    })
    .catch((error) => {
      console.error(error.message);
      dispatch(fetchCartItemsFailure(error?.message));
    });
};

/*********
 *
 * @action post items actions
 *********/
export const postItemToCartRequestStarted = () => ({
  type: types.POST_ITEM_TO_CART_REQUEST,
});

export const postItemToCartSuccess = (payload) => ({
  type: types.POST_ITEM_TO_CART_SUCCESS,
  payload,
});

export const postItemToCartFailure = (payload) => ({
  type: types.POST_ITEM_TO_CART_FAILURE,
  payload,
});

export const postItemToCartRequest = (data) => (dispatch) => {
  dispatch(postItemToCartRequestStarted());
  api
    .post(`${process.env.REACT_APP_DEV_URL}cartitems`, data)
    .then(() => {
      dispatch(postItemToCartSuccess(data));
    })
    .catch((error) => {
      console.error(error.message);
      dispatch(postItemToCartFailure(error?.message));
    });
};

/*********
 *
 * @action items items actions
 *********/
export const deleteItemFromCartRequestStart = () => ({
  type: types.DELETE_ITEM_FROM_CART_REQUEST,
});

export const deleteItemFromCartRequestSuccess = (payload) => ({
  type: types.DELETE_ITEM_FROM_CART_SUCCESS,
  payload,
});

export const deleteItemFromCartRequestFailure = (payload) => ({
  type: types.DELETE_ITEM_FROM_CART_FAILURE,
  payload,
});

export const deleteItemFromCartRequest = (id) => (dispatch) => {
  dispatch(deleteItemFromCartRequestStart);
  api
    .delete(`${process.env.REACT_APP_DEV_URL}cartitems/${id}`)
    .then((res) => {
      dispatch(deleteItemFromCartRequestSuccess(res.data));
    })
    .catch((error) => {
      console.error(error.message);
      dispatch(deleteItemFromCartRequestFailure(error?.message));
    });
};
