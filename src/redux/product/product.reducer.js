import {types} from './product.types';

export const initialState = {
  isLoading: false,
  error: null,
  product: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return {...state, isLoading: true};

    case types.FETCH_PRODUCT_SUCCESS:
      return {...state, isLoading: false, product: action.payload[0]};

    case types.FETCH_PRODUCT_FAILURE:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
