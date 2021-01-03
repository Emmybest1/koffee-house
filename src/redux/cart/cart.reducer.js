import {types} from './cart.types';

export const initialState = {
  isLoading: false,
  error: null,
  fetchedCartItems: [],
  postedItem: {},
  deletedItem: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART_ITEMS_REQUEST ||
      types.POST_ITEM_TO_CART_REQUEST ||
      types.DELETE_ITEM_FROM_CART_REQUEST ||
      types.CLEAR_CART_ITEMS_REQUEST:
      return {...state, isLoading: true};

    case types.FETCH_CART_ITEMS_SUCCESS:
      return {...state, isLoading: false, fetchedCartItems: action.payload};

    case types.FETCH_CART_ITEMS_FAILURE:
      return {...state, error: action.payload};

    case types.POST_ITEM_TO_CART_SUCCESS:
      return {...state, postedItem: action.payload};

    case types.POST_ITEM_TO_CART_FAILURE: {
      return {...state, error: action.payload};
    }

    default:
      return state;
  }
};
