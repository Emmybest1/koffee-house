import {types} from './products.types';

export const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return {...state, isLoading: true};

    case types.FETCH_PRODUCTS_SUCCESS:
      return {...state, isLoading: false, products: action.payload};

    case types.FETCH_PRODUCTS_FAILURE:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
